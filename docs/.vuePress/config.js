module.exports = {
  title: "敖珍珍的个人博客",
  decription: "azz blog",
  base: "/test",
  dest: "./test",
  themeConfig: {
    //导航配置
    nav: [
      //text导航显示的名字，link为路径，及文件夹的名字
      {text: '首页', link: '/'},
      {text: '博文章', link: '/blog/'},
      {text: '关于我的', link: '/about/'},
      {text: 'Github', link: 'https://github.com/azz1123'}
    ],
    // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
    // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
    sidebar: [
      {
        title: "js学习",
        collapsable: true,
        children: [
          '/blog/',
          '/js/'
        ]
      },

    ],

    // 这、是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
    // sidebarDepth: 1
  }
}

function genSidebarConfig(title) {
  return [
    {
      title: title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}

