import { FlowTreeNode } from '../types';

// 根据 id 查找节点
export const findNodeById = (nodes: FlowTreeNode[], id: string): FlowTreeNode | undefined => {
  for (const node of nodes) {
    if (node.id === id) {
      return node;
    }
    const child = findNodeById(node.children, id);
    if (child) {
      return child;
    }
  }
};

// 根据 id 查找父节点
export const findParentNodeById = (nodes: FlowTreeNode[], id: string): FlowTreeNode | undefined => {
  for (const node of nodes) {
    if (node.children.some((child) => child.id === id)) {
      return node;
    }
    const parent = findParentNodeById(node.children, id);
    if (parent) {
      return parent;
    }
  }
};
