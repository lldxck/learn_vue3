<template>
  <div>
    <h2>我是Home组件</h2>
    <ul>
      <li>home内容1</li>
      <li>home内容2</li>
      <li>home内容3</li>
    </ul>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">动态</router-link>

    <router-view></router-view>
  </div>
</template>

<script setup></script>
