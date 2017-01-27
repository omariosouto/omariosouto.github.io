# Hacker | [中文版文档](/README_zh-CN.md)
__Hacker is a simple style of theme for blog, hoping you focus on writing more rather than the typesetting.__  

At first, [moyo](http://liuxinyu.me/) designed and built it for Wordpress.  
Later, DaraW ported it to Hexo.

## Demo
You can also reference my blog: [DaraW](http://blog.daraw.cn/)  

![](https://ooo.0o0.ooo/2016/08/04/57a306f56bee2.png
)

## Installation
Firstly get all the theme files, `git clone` or `download zip` is okay.  

Create a folder `Hacker` in the folder `themes`, and copy all the theme files to the folder `Hacker`.  

Then apply the theme in hexo global configuration file `_config.yml`:

```yaml
theme: Hacker
```
Now all is in order, just enjoy~

__Notice: After every update, you'd better run command `hexo clean` to clean cache files before Hexo generating, in case of some problems cache files bring.__


## Configure
In the theme configuration file `_config.yml`:

```yaml
# duoshuo comment
duoshuo: true
duoshuo_name:

# disqus comment
disqus: false
disqus_shortname:

# google analytics
googleTrackId:
```


`duoshuo`: `boolean`, use duoshuo or not;  
`duoshuo_name`: `string`, your duoshup ID, please don't use other people's IDs。

`disqus`: `boolean`, use disqus or not;  
`disqus_shortname`: your disqus site shortname.

`googleTrackId`: your Google Analytics ID, Hacker will not use Google Analytics if it's empty.

## Update
### v1.0.1
* fix incorrect comment link on the home page

### v1.0
* fix bug caused by subdirectory([issue#10](https://github.com/CodeDaraW/Hacker/issues/10))
* fix display of `code` tag


### v0.3.
* Refactor ejs template files
* Replace css with stylus
* Add English Version README


### v0.2
* Remove some useless css
* Fix bug that icon still shows when there are no categories or tags
* Rewrite the archive index page
* Change the display of code block


## License
GPL(General Public License)
