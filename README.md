
## メモ
- [ホスト先](https://master.d3t4uee5vnvism.amplifyapp.com/ "ホスト")
- [デザイン案 ](https://www.figma.com/file/3Gg9GwXX7tBhWRXSB6Nhix/HackU2021?node-id=0%3A1 "デザイン")

## このリポジトリの扱い方

### 初めに

- ターミナルで以下の操作を行う
- 空のディレクトリで``` git clone https://github.com/potechi2021/codeshare ```を打ち、Enterをおす
- HackU2021summer/が作成される
- ```cd HackU2021summer/``` で移動
- ``` git branch <自分のブランチ名(なんでも大丈夫！)> ``` を打ち、Enterをおす (自分のブランチを作る)
- ``` git checkout <自分のブランチ名(なんでも大丈夫！)> ``` を打ち、Enterをおす (自分のブランチへ移動)
- ``` git branch ``` を打ち、Enterを押すと以下のようになるのを確認する
```$ git branch ```
```* <自分のブランチ名> ```
```  main ```
  
### ファイルを変更する時

- ターミナルで以下の操作を行う
- ``` git pull origin main``` 
- ``` git branch ``` と打ち、自分のブランチにいることを確認する 
- mainにいる場合は、``` git checkout <自分のブランチ名> ```で移動する
- ファイルに変更を加える
- ``` git add <変更したファイル名> ``` を打つ
- ``` git commit -m "変更した点" ``` を打つ
- ``` git push origin <自分のブランチ名> ```を打つ → [ここへ移動](https://github.com/potechi2021/HackU2021summer/ "ここ")
- のちに記入


- ![1つ目](readme_img/compare_and_pullrequest.png)
- ![2つ目](readme_img/create_pull_request.png)
- ![3つ目](readme_img/merge_pull_request.png)
- ![4つ目](readme_img/delete_branch.png)

- ターミナルに戻る
- ``` git checkout main ``` でmainに戻る
- ``` git pull origin main ``` でリモートブランチとバージョンを一致させる
- ``` git branch ``` で今いるブランチを確認
- ``` git branch -D <消すブランチ名>``` でブランチを削除
- ``` git branch <自分のブランチ名>``` でブランチを作成
- ``` git checkout <自分のブランチ名>``` でブランチを移動

### ちょくちょくやって欲しいこと

- ``` git pull origin main ``` 
- ``` git fetch ``` 
- のちに記入


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
