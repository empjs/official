# empShare
:::tip title="EmpShare"
基于 `module federation` 进行二次封装开发、适配更多业务模型     
目前支持 基本 `module federation`的共享方式、基于cdn的共享方式以及ESM的共享方式
:::
## 基础共享配置
```ts title="emp-config.js"
import {defineConfig} from '@empjs/cli'
export default defineConfig(({mode, env}) => {
  return {
    empShare: {
      name: 'unpkglib',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {singleton: true},
        'react-dom': {singleton: true},
      },
    },
  }
})
```

## CDN共享配置
```ts title="emp-config.js"
import {defineConfig} from '@empjs/cli'
export default defineConfig((store) => {
 //
   const shareLib =
    store.mode === 'development'
      ? {
          react: 'React@https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.min.js',
          'react-dom': 'ReactDOM@https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js',
        }
      : {
          react: 'React@https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
          'react-dom': 'ReactDOM@https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
        }
//
  return {
    empShare: {
      name: 'unpkglib',
      exposes: {
        './App': './src/App',
      },
      shareLib
    },
  }
})
```

## ESM共享配置
```ts title="emp-config.js"
import {defineConfig} from '@empjs/cli'
export default defineConfig(store => {
  return {
    build : {
     target:'es2015',
    },
    empShare: {
    name: 'unpkglib',
    exposes: {
        './App': './src/App',
    },
    shareLib: {
          react: `https://esm.sh/react@18.2.0${store.mode === 'development' ? '?dev' : ''}`,
          'react-dom': `https://esm.sh/react-dom@18.2.0${store.mode === 'development' ? '?dev' : ''}`,
          'react/jsx-dev-runtime': 'https://esm.sh/react/jsx-dev-runtime.js',
          'react/jsx-runtime': 'https://esm.sh/react/jsx-runtime.js',
    },
    //开启 importMap
    useImportMap:true,
    },
  }
})

```