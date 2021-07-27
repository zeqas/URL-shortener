# 短網址專案

<br>

此專案可以讓使用者轉換輸入的網址為短網址，並透過短網址連結至原本輸入的網站。

也可透過 heroku 連結使用本專案：https://nameless-shelf-45002.herokuapp.com/

<br>

## 專案功能

<br>

1. 使用者可以輸入網址
2. 使用者可以轉換輸入網址為短網址

<br>

## 建置環境

<br>

* node.js : ^10.15.0
* express: ^4.17.1
* express-handlebars: ^5.3.2
* method-override: ^3.0.0
* mongoose: ^5.13.3

<br>

## 安裝流程

<br>

1. 藉由 git clone 將專案下載至本地
```
git clone https://github.com/zeqas/URL-shortener.git
```
2. 進入專案資料夾
```
cd URL-shortener
```
3. 安裝套件
```
npm install
```
4. 加入種子資料
```
npm run seed
```
5. 啟動網頁伺服器
```
npm run dev
```
6. 出現下列訊息，表示啟動成功，可點選連結開啟網頁

The server is running on http://localhost:3000