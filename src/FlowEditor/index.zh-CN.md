---
nav:
  title: 组件
  order: 20
group:
  title: 画布
  order: 1
title: FlowEditor 画布编辑器
order: 2
description:
---

## default

<code src="./demos/index.tsx"></code>

### 画布交互说明

<table>
  <thead>
    <tr>
      <th colspan="2" style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8; background: #000; color: white;">用户操作</th>
      <th colspan="2" style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8; background: #000; color: white;">画布交互</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">触控板</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">鼠标</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">目标行为</td>
    </tr>
     <tr>
      <td colspan="4" style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8; background: #fafafa">点击交互</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">点击</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><a href="https://lucide.dev/icons/mouse-pointer-2"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607233706-2bab510b-d02c-43e1-b8cc-293b3e217a05.png" alt="mouse-pointer-2.png" title="" style="width: 24px; height: 24px;"></a> 选中元素</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">点击拖拽</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">无操作 / <img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607265684-238b2c87-64bc-4fe4-b9d2-ad53b0b1fb12.png" alt="mouse-pointer-2 (1).png" title="" style="width: 24px; height: 24px;"> 创建选区</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">shift + 点击拖拽</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">无操作 / <img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607265684-238b2c87-64bc-4fe4-b9d2-ad53b0b1fb12.png" alt="mouse-pointer-2 (1).png" title="" style="width: 24px; height: 24px;">扩展选区（在选中其他元素的基础上）</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">空格 + 点击拖拽</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607317347-6bec4390-d612-49cc-8671-d1bfc18ec270.png" alt="mouse-pointer-2 (2).png" title="" style="width: 24px; height: 24px;"> 滚动画布（空格等于切换为拖动工具）</td>
    </tr>
    <tr>
      <td colspan="4" style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8; background: #fafafa">滚动交互</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><br /></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">滚轮滚动</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607330789-dc07201a-e0e5-48da-972e-cf6ebac63db8.png" alt="mouse-pointer-2 (3).png" title="" style="width: 24px; height: 24px;">上下滚动画布</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">shift + 滚轮滚动</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">      <img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607399693-4ecef8cf-8c72-48db-bffc-a93839b1a86d.png" alt="mouse-pointer-2 (4).png" title="" style="width: 24px; height: 24px;">水平滚动画布</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">ctrl + 滚轮滚动</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607464557-b9ae884e-035f-4ecf-a41f-4e868d2ce11c.png" alt="mouse-pointer-2 (5).png" title="" style="width: 24px; height: 24px;"> 围绕指针缩放</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">平移（pan）</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><br /></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607514195-3e7d7a2f-831f-4fcd-9041-c750b83a62a4.png" alt="mouse-pointer-2 (6).png" title="" style="width: 24px; height: 24px;"> 滚动画布（此时鼠标指针不变）</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">缩放（zoom）</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"></td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/300581/1692607464557-b9ae884e-035f-4ecf-a41f-4e868d2ce11c.png" alt="mouse-pointer-2 (5).png" title="" style="width: 24px; height: 24px;"> 围绕指针缩放</td>
    </tr>
    <tr>
      <td colspan="4" style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8; background: #fafafa">键盘交互</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">mac</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">win</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;"><br /></td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">⌘ + a</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">ctrl + a</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">选中全部节点</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">⌘ + z</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">ctrl + z</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">撤销上一步操作</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">⌘ + c</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">ctrl + c</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">复制选中的部分</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">⌘ + v</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">ctrl + v</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">粘贴选中的部分</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">⌘ + shift + z</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">ctrl + Y</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">重做上一步操作</td>
    </tr>
    <tr>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">backspace</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">backspace</td>
      <td style="text-align: center; border-right: 0.5px solid #E7E9E8; border-left:0.5px solid #E7E9E8;">删除选中区域</td>
    </tr>
  </tbody>
</table>

## API

FlowEditor 为数据驱动解决方案，需搭配 [useFlowEditor](/use-docs/use-flow-editor) 使用。
