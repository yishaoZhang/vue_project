## install ##
+ 删除全局vue-cli
    + npm uninstall vue-cli -g
+ 前置
    + node 版本 8.9以上
+ 全局安装vue-cli3
    + npm install -g @vue/cli
+ 运行vue || vue --version
    + vue is not a command?
        + 将vue 添加至系统全局变

## create ##
+ vue create [project-name]
+ check Manually select features
    + check
        + router vuex css pre-processors babel(default) linter/formatte(default)
            + use space key to check or not
        + check router mode
            + history(use)
            + hash
        + css pro-processor
            + such as sass/scss less stylus
            + sass(use)
        + pick linter/formatter
            + such as airbnb standard, etc.
            + standard(suggest)
        + additional lint features
            + lint on save(suggest)
            + lint and fix on commit
        
        
