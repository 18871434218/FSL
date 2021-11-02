```js
git 操作

git的工作就是创建和保存你的项目的快照与之后的快照进行对比


git clone [url]                          ----- 拷贝一个git仓库到本地
如：git clone https://github.com/tianqixin/runoob-git-test
   也可以另起名字  
   git clone https://github.com/tianqixin/runoob-git-test another-runoob-name
   

git add <file> <file>                                ------- 添加文件到仓库
git status -s                                        ------- 查看修改文件状态
git restore --staged <file>                          -------- 取消暂存文件


git分支管理
git branch (branchname)                              --------- 创建分支
git checkout (branchname)                            --------- 切换分支
  当切换分支的时候，Git会用该分支的最后提交的快照替换你的工作目录的内容，所以多个目录不需要多个目录
  
git merge                                            --------- 合并分支
git branch                                           --------- 列出本地所有分支

git init的时候，默认情况下Git就会为你创建master分支


我们也可以使用git checkout -b(branchname)命令来创建新分支并立即切换到该分支下，从而在该分支操作
git checkout -b (branchname)                         --------- 创建并切换到新分支
git branch -d (branchname)                           --------- 删除分支



git 查看提交历史
  git log                                            ---- 查看历史提交记录
  git blame <file>                                   ---- 以列表形式查看指定文件的历史修改记录 
  
  git log --oneline                                  ---- 查看历史记录的简洁版本
  git log --oneline --graph                          ---- 查看历史中什么时候出现了分支、合并
  git log --reverse --oneline                        ---- 逆向显示所有日志
  
  
  
  git tag V1.0                                        ----- 创建标签
  git tag                                             ----- 查看所有标签
  git tag -a <tagname> -m '指定标签内容'               ----- 指定标签信息命令 
  git tag -d V1.0                                     ----- 删除标签
  git show V1.0                                       ------ 查看此版本所修改的内容
  
  
  git remote                                          ------ 查看当前配置有哪远程仓库
  
  
  git创建仓库  新建目录
  
  
  第一：直接在github上点击  Create repository 按钮，创建git仓库
  第二：根据提示，在本地仓库运行命令
    $ mkdir runoob-git-test                     # 创建测试目录
    $ cd runoob-git-test/                       # 进入测试目录
    $ echo "# 菜鸟教程 Git 测试" >> README.md     # 创建 README.md 文件并写入内容
    $ ls                                        # 查看目录下的文件
    README
    $ git init                                  # 初始化
    $ git add README.md                         # 添加文件
    $ git commit -m "添加 README.md 文件"        # 提交并备注信息
    [master (root-commit) 0205aab] 添加 README.md 文件
     1 file changed, 1 insertion(+)
     create mode 100644 README.md

    # 提交到 Github
    $ git remote add origin git@github.com:tianqixin/runoob-git-test.git
    $ git push -u origin master	
```

