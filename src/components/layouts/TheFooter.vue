<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-sm-5 col-lg-5">
          <p class="padding-top-xsm">{{description}}</p>

          <div class="text-md">
            <a
              v-for="(item,index) in contacts"
              v-bind:key="index"
              :href="item.link"
              v-title="item.title"
              :style="contactStyle"
              target="_blank"
            >
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>

          <br />

          <span v-html="designer"></span>
        </div>

        <div class="col-sm-6 col-lg-6 col-lg-offset-1">
          <div class="row">
            <div class="col-sm-4">
              <h4>{{sponsor.title}}</h4>

              <ul class="list-unstyled">
                <li v-for="(item,index) in sponsor.list" v-bind:key="index">
                  <a :href="item.link" :title="item.title">
                    <img
                      v-title="item.title"
                      :src="item.logo"
                      :alt="item.title"
                      class="footer-sponsor-link"
                      width="98"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ statistics.title }}</h4>

              <ul class="list-unstyled">
                <li
                  v-for="(item,index) in statistics.list"
                  :key="index"
                >{{ item.title }}: {{ item.description }}</li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ other.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="(item,index) in other.list" v-bind:key="index">
                  <a :href="item.link" :title="item.title" target="_blank">
                    <i :class="`fa fa-${item.icon}`"></i>
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import title from "@/directives/title";

export default {
  name: "TheFooter",
  directives: {
    title
  },
  data() {
    return {
      description: "VuejsCaff是一个学习社区",
      contacts: [
        {
          icon: "envelope",
          title: "反馈问题",
          link: "mailto:lpf260@qq.com"
        },
        {
          icon: "weibo",
          title: "站长微博",
          link: "https://weibo.com"
        },
        {
          icon: "wechat",
          title: "站长微信",
          link: "royer260"
        }
      ],
      contactStyle: {
        paddingRight: "8px"
      },
      designer: `   <span style="font-size:0.9em">Designed by
                        <span style="color: #e27575;font-size: 14px;">❤</span>
                        <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>
                    </span>
                `,
      sponsor: {
        title: "赞助商",
        list: []
      },
      statistics: {
        title: "统计信息",
        list: [
          {
            title: "社区会员",
            description: "22889"
          },
          {
            title: "话题数",
            description: "7397"
          },
          {
            title: "评论数",
            description: "39375"
          }
        ]
      },
      other: {
        title: "其他信息",
        list: [
          {
            icon: "thumbs-up",
            title: "软件外包服务",
            link: "https://vuejscaff.com/contact"
          },
          {
            icon: "globe",
            title: "推荐网站",
            link: "https://vuejscaff.com/sites"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
