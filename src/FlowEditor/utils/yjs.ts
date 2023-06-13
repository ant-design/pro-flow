import { Doc, UndoManager } from 'yjs';
import { DocOpts } from 'yjs/dist/src/utils/Doc';

interface UserActionParams {
  type: string;
  name: string;
  timestamp: number;
}

class UserAction {
  type;
  name;
  timestamp;
  constructor(params: UserActionParams) {
    this.type = params.type;
    this.name = params.name;
    this.timestamp = params.timestamp;
  }
}

export class DocWithHistoryManager<T = object> extends Doc {
  private _internalHistoryKey = '__INTERNAL_HISTORY_MAP__';

  constructor(params?: DocOpts) {
    super(params);

    this.undoManager = new UndoManager(this.getHistoryMap(), {
      trackedOrigins: new Set([UserAction]),
    });
  }

  public undoManager: UndoManager;

  updateHistoryData = (value: Partial<T>) => {
    const map = this.getMap(this._internalHistoryKey);

    Object.entries(value).forEach(([key, value]) => {
      map.set(key, value);
    });
  };

  recordHistoryData = (value: Partial<T>, userAction: UserActionParams) => {
    this.transact(() => {
      this.updateHistoryData(value);
    }, new UserAction(userAction));
  };

  getHistoryMap = () => {
    return this.getMap(this._internalHistoryKey);
  };

  getHistoryJSON = () => {
    const map = this.getMap(this._internalHistoryKey);

    return map.toJSON() as T;
  };

  redo = () => {
    return this.undoManager.redo();
  };

  undo = () => {
    return this.undoManager.undo();
  };
}
