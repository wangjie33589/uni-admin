export default {
	login: {
		url: '/uni_modules/uni-id-pages/pages/login/login-withpwd' // 登录页面路径
	},
	index: {
		url: '/pages/index/index' // 登录后跳转的第一个页面
	},
	error: {
		url: '/pages/error/404' // 404 Not Found 错误页面路径
	},
	navBar: { // 顶部导航
		logo: '/static/logo.png', // 左侧 Logo
		langs: [{
			text: '中文简体',
			lang: 'zh-Hans'
		}, {
			text: '中文繁體',
			lang: 'zh-Hant'
		}, {
			text: 'English',
			lang: 'en'
		}],
		themes: [{
			text: '默认',
			value: 'default'
		}, {
			text: '绿柔',
			value: 'green'
		}],
		debug: {
			enable: process.env.NODE_ENV !== 'production', //是否显示错误信息
			engine: [{ // 搜索引擎配置（每条错误信息后，会自动生成搜索链接，点击后跳转至搜索引擎）
				name: '百度',
				url: 'https://www.baidu.com/baidu?wd=ERR_MSG'
			}, {
				name: '谷歌',
				url: 'https://www.google.com/search?q=ERR_MSG'
			}]
		}
	},
	sideBar: { // 左侧菜单
	      // 配置静态菜单列表（放置在用户被授权的菜单列表下边）
	      staticMenu: [
			  {
	      		menu_id: "demo",
	      		text: '系统管理',
	      		icon: 'admin-icons-kaifashili',
	      		url: "/pages/system/user/list",
	      		children: [{
	      			menu_id: "icons",
	      			text: '图标',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/demo/icons/icons'
	      		},{
	      			menu_id: "icons",
	      			text: '应用管理',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/system/app/list'
	      		},{
	      			menu_id: "icons",
	      			text: '应用管理',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/system/app/list'
	      		},{
	      			menu_id: "icons",
	      			text: '菜单管理',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/system/menu/list'
	      		},{
	      			menu_id: "icons",
	      			text: '权限管理',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/system/permission/list'
	      		},{
	      			menu_id: "icons",
	      			text: '角色管理',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/system/role/list'
	      		},{
	      			menu_id: "icons",
	      			text: '用户管理',
	      			icon: 'admin-icons-icon',
	      			value: '/pages/system/user/list'
	      		}]
	      	}, 
			
			{
	      		menu_id: "enterprise",
	      		text: '团队管理',
	      		icon: 'admin-icons-kaifashili',
	      		url: '/pages/enterprise/list',
	      		children: [{
	      			menu_id: "enterprise",
	      			text: '团队管理',
	      			icon: 'admin-icons-table',
	      			value: '/pages/enterprise/list'
	      		}]
	      	},
	      	{
	      		menu_id: "user",
	      		text: '用户管理',
	      		icon: 'admin-icons-kaifashili',
	      		url: '/pages/enterprise/list',
	      		children: [{
	      			menu_id: "user",
	      			text: '用户管理',
	      			icon: 'admin-icons-table',
	      			value: '/pages/user/list'
	      		}]
	      	},
			{
				menu_id: "goods",
				text: '套餐管理',
				icon: 'admin-icons-kaifashili',
				url: '/pages/goods/list',
				children: [{
					menu_id: "goods",
					text: '套餐管理',
					icon: 'admin-icons-table',
					value: '/pages/goods/list'
				}]
			},{
				menu_id: "car_info",
				text: '车辆管理',
				icon: 'admin-icons-kaifashili',
				url: '/pages/car_info/list',
				children: [{
					menu_id: "goods",
					text: '车辆管理',
					icon: 'admin-icons-table',
					value: '/pages/car_info/list'
				}]
			},{
				menu_id: "order",
				text: '订单管理',
				icon: 'admin-icons-kaifashili',
				url: '/pages/order/list',
				children: [{
					menu_id: "goods",
					text: '订单管理',
					icon: 'admin-icons-table',
					value: '/pages/order/list'
				}]
			},{
				menu_id: "pay_infos",
				text: '支付信息',
				icon: 'admin-icons-kaifashili',
				url: '/pages/pay_infos/list',
				children: [{
					menu_id: "goods",
					text: '支付信息',
					icon: 'admin-icons-table',
					value: '/pages/pay_infos/list'
				}]
			}
			]

	},

	uniStat: {

	}

}