export interface MetaData {
  /**
   * 名称
   * @description 可选参数，如果不传则使用默认名称
   */
  title?: string;
  description?: string;
  /**
   * 角色头像
   * @description 可选参数，如果不传则使用默认头像
   */
  avatar?: string;
  /**
   *  角色头像背景色
   * @description 可选参数，如果不传则使用默认背景色
   */
  avatarBackground?: string;
}
