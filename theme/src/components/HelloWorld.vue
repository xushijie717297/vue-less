<template>
	<div id="Xtsz">
		<div id="chartmain" style="width:100vw; height: 100%;"></div>
		<el-button type="primary" class="add" @click="add">新增</el-button>
		<el-button type="primary" class="con" @click="con">打印</el-button>
		<ul>
			<li v-for="(item,index) in list" :key="index" class="li">
				<div style="color:#fff;font-size:30px">{{index+1}}</div>
				<div class="item">
          <el-button type="primary" class="adds" @click="adds(index)">新增</el-button>
          <el-button type="primary" class="del" @click="del(index)">删除</el-button>
          <el-input placeholder="请输入条件" v-model="item.what" style="margin-top:10px"></el-input>
          <ul>
            <li v-for="(m,n) in item.lists" :key="n" class="li">
                <div style="color:#fff;font-size:20px">{{n+1}}</div>
                <div class="items">
                  <el-input placeholder="请输入姓名" v-model="m.name"></el-input>
                  <el-input placeholder="请输入性别" v-model="m.sex"></el-input>
                  <el-input placeholder="请输入年龄" v-model="m.age"></el-input>
                  <el-button type="primary" class="dels" @click="dels(index,n)">删除</el-button>
                </div>
            </li>
          </ul>
        </div>
			</li>
		</ul>
	</div>
</template>

<script>
	import echarts from "echarts";
	import echartswordcloud from 'echarts-wordcloud'
	export default {
		name: 'Xtsz',
		data() {
			return {
				words: [{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
					{
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					}, {
						name: "HTML",
						value: 10000
					},
					{
						name: "javascript",
						value: 6181
					},
					{
						name: "JAVA",
						value: 4386
					},
					{
						name: "PHP",
						value: 4055
					},
					{
						name: ".NET",
						value: 2467
					},
					{
						name: "C++",
						value: 6181
					},
					{
						name: "C#",
						value: 3386
					},
					{
						name: "SQL",
						value: 5055
					},
					{
						name: "Python",
						value: 3467
					},
				],
				list: [

				]
			}
		},
		methods: {
			getWordcloud: function() {
				var maskImage = new Image();
				maskImage.src = require('./d6b5e2ecbae3c6cc3bb0ea28153bcf3.jpg')
				var option = {
					title: {
						text: '编程语言',
						textStyle: {
							color: '#fff'
						},
						x: 'center',
						y: '20'
					},
					tooltip: {
						show: true
					},
					series: [{
						name: "",
						type: "wordCloud",
						sizeRange: [10, 20],
						rotationRange: [0, 180],
						textPadding: 0,
						maskImage: maskImage,
						gridSize: 1,
						autoSize: {
							enable: true,
							minSize: 14
						},
						textStyle: {
							normal: {
								color: function() {
									return (
										"rgb(" +
										Math.round(Math.random() * 255) +
										", " +
										Math.round(Math.random() * 255) +
										", " +
										Math.round(Math.random() * 255) +
										")"
									);
								}
							},
							//鼠标移入
							emphasis: {
								shadowBlur: 20,
								shadowColor: '#fff'
							}
						},
						data: this.words
					}]
				}

				//初始化echarts实例
				var myChart = echarts.init(document.getElementById("chartmain"));
				window.addEventListener(
					"resize",
					function() {
						myChart.resize();
					},
					false
				);
				//使用制定的配置项和数据显示图表
				myChart.setOption(option);
			},
			add: function() {
				this.list.push({
					"what": "",
					"lists": [{
						"name": "",
						"sex": "",
						"age": ""
					}]
				})
			},
			con: function() {
				console.log(this.list)
			},
			del: function(index) {
				this.list.splice(index, 1)
			},
			adds: function(index) {
				this.list[index].lists.push({
					"name": "",
					"sex": "",
					"age": ""
				})
			},
			dels: function(index, n) {
				this.list[index].lists.splice(n, 1)
			}
		},
		mounted() {
			// this.getWordcloud()
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#Xtsz {
    /* height: 100%; */
    /* width: 100%; */
		padding: 50px 0 0 50px;
	}
	.item {
		padding: 20px;
		border: 2px solid #fff;
	}

	.items {
		display: flex;
	}

	.li {
    display: flex;
		margin: 10px;
	}
</style>
