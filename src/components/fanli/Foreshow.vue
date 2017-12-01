<template>
    <div class="Foreshow">
        <div class="head">
            <a href="#"></a>
            <span>精彩预告</span>
        </div>
        <ul class="invest-tab">
            <li><router-link to="/thisweek" class="link"><span>本周预告</span></router-link></li>
            <li><router-link to="/nextweek" class="link"><span>下周预告</span></router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
    .Foreshow{
    .head{
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        background: #333333;
        position: relative;
        a{
            position: absolute;
            left: 0.24rem;
            top: 0.26rem;
            display: block;
            width: 0.2rem;
            height: 0.34rem;
            background:url('/static/images/back.png') no-repeat;
            background-size: 100% 100%;
        }
            span{
                display: block;
                font-size: 0.35rem;
                color: #dfc289;
            }
        }
            .invest-tab{
                width:100%;
                height:0.9rem;
                line-height:0.9rem;
                display:flex;
            li{
                flex:1;
                text-align:center;
                a{
                    display:block;
                    color:#333333;
                    font-size:0.3rem;
                }
                .router-link-active{
                    span{
                        padding-bottom: 0.13rem;
                         color:#dfc289;
                         border-bottom: 1px solid #dfc289;
                    }
                   
                }
              }
            }
    }
</style>
