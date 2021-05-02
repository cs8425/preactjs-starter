# preact.js starter project

## 基本用法

* 開發
	* esbuild:
		* 啟動&重編反應快速
		* `npm run start`
		* 瀏覽器打開: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
		* 無限F5
	* webpack
		* 啟動&重編較慢, 尤其當專案變大後特別有感
		* transpiler:
			* babel: `npm run start-webpack`
			* swc: `npm run start-webpack-swc`
		* 瀏覽器打開: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
* 打包輸出
	* webpack
		* transpiler + minimizer:
			* babel + default: `npm run build`
			* babel + esbuild: `npm run build-esbuild`
			* swc + default: `npm run build-swc`
			* swc + esbuild: `npm run build-swc-esbuild`
		* 輸出在 `dist/` 資料夾內
	* 保守(慢)選: `webpack: babel + default` `npm run build`
	* 快速選: `webpack: swc + esbuild` `npm run build-swc-esbuild`
	* 高級: 自己組合

## 檔案架構
	* `src/` : code
		* `main.js` : entry
		* `comp.jsx` : 組件, jsx版
		* `comp.js` : 組件, js版
	* `public/` : html & 圖片等共用資源

### dependencies

* webpack: 基本一定要有
	* `webpack`
	* `webpack-cli`
	* `webpack-dev-server`
	* `webpack-merge`
	* `html-webpack-plugin` : (幾乎是)基本必須
	* `clean-webpack-plugin` : 輸出資料夾清理
	* `source-map-loader` : 引用外部套件時, 順便把source map引入

* webpack + babel組合
	* `@babel/core`
	* `babel-loader`
	* `@babel/plugin-proposal-optional-chaining` : `AAA?.BBB?.CCC`語法加強
	* `@babel/preset-react` : react + jsx組合包
		* 如果不是使用React, 通常需要加入參數`{ pragma: 'h', pragmaFrag: 'Fragment' }`
	* `@babel/plugin-transform-react-jsx` : 單純的jsx轉譯(上面那個已包含)
		* 如果不是使用React, 通常需要加入參數`{ pragma: 'h', pragmaFrag: 'Fragment' }`

* esbuild:
	* `esbuild`
		* 已內建jsx轉譯&打包
		* 缺點不可轉譯到ES5以下的js語法
		* 自動把所有相關資源複製制輸出資料夾可能要自己另外處理 (只打包js)
		* 可以獨立使用(不與webpack組合)

* webpack + esbuild組合:
	* `esbuild-loader`
		* 可用於css/js壓縮
		* 可用於js/jsx轉譯, 但缺點同上

* webpack + swc組合:
	* `swc-loader`
		* 可用於js壓縮
		* 可用於js/jsx/ts轉譯

* 其他
	* `cross-env` : 方便切換設定用
