  /***js form Morgan***/
  /*****************************评论功能 From langzhou**********************************/
function inject(){
  //获取当前主题名称
  let themeStyle = document.querySelector('#themeStyle')
  if(themeStyle){
    let url = themeStyle.getAttribute('href').split('/')
    let theme = url[url.length - 2]
    if(!theme){
      alert("未能获取到主题名称")
    }else{
      let script = document.querySelector('#emojiScript')
      if(script){
        let js = document.createElement('script')
            js.setAttribute('src','./appearance/themes/' + theme + '/comment/index.js')
            js.setAttribute('type','module')
            js.setAttribute('defer','defer')
        document.head.insertBefore(js,script)
      }else{
        setTimeout(()=>inject(),500)
      }
    }
  }else{
    setTimeout(()=>inject(),500)
  }
}
inject()
  /****************************思源API操作**************************/ 
  async function 设置思源块属性(内容块id, 属性对象) {
    let url = '/api/attr/setBlockAttrs'
    return 解析响应体(向思源请求数据(url, {
        id: 内容块id,
        attrs: 属性对象,
    }))
  }
  async function 向思源请求数据(url, data) {
    let resData = null
    await fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            Authorization: `Token ''`,
        }
    }).then(function (response) { resData = response.json() })
    return resData
  }
  async function 解析响应体(response) {
    let r = await response
    return r.code === 0 ? r.data : null
  }
  
 
  /****UI****/
  function ViewSelect(selectid,selecttype){
  let button = document.createElement("button")
  button.id="viewselect"
  button.className="b3-menu__item"
  button.innerHTML='<svg class="b3-menu__icon" style="null"><use xlink:href="#iconGlobalGraph"></use></svg><span class="b3-menu__label" style="">视图选择</span><svg class="b3-menu__icon b3-menu__icon--arrow" style="null"><use xlink:href="#iconRight"></use></svg></button>'
  button.appendChild(SubMenu(selectid,selecttype))
  return button
}

function SubMenu(selectid,selecttype,className = 'b3-menu__submenu') {
  let node = document.createElement('div');
  node.className = className;
  if(selecttype=="NodeList"){
    node.appendChild(GraphView(selectid))
    node.appendChild(TableView(selectid))
	node.appendChild(kanbanView(selectid))
    node.appendChild(DefaultView(selectid))
  }
  if(selecttype=="NodeTable"){
    node.appendChild(FixWidth(selectid))
    node.appendChild(AutoWidth(selectid))
	node.appendChild(vHeader(selectid))
	node.appendChild(Removeth(selectid))
	node.appendChild(Defaultth(selectid))
  }
  if(selecttype=="NodeBlockquote"){
    node.appendChild(Error(selectid))
	node.appendChild(Warn(selectid))
	node.appendChild(Bug(selectid))
	node.appendChild(Check(selectid))
	node.appendChild(Light(selectid))
	node.appendChild(Question(selectid))
	node.appendChild(Wrong(selectid))
	node.appendChild(Info(selectid))
	node.appendChild(Pen(selectid))
	node.appendChild(Note(selectid))
	node.appendChild(Bell(selectid))
    node.appendChild(Defaultbq(selectid))	
  }
return node;
}

function GraphView(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","f")
  button.setAttribute("custom-attr-value","dt")

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconFiles"></use></svg><span class="b3-menu__label">转换为导图</span>`
  button.onclick=ViewMonitor
  return button
}
function TableView(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","f")
  button.setAttribute("custom-attr-value","bg")

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">转换为表格</span>`
  button.onclick=ViewMonitor
  return button
}
function kanbanView(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","f")
  button.setAttribute("custom-attr-value","kb")

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconMenu"></use></svg><span class="b3-menu__label">转换为看板</span>`
  button.onclick=ViewMonitor
  return button
}
function DefaultView(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.onclick=ViewMonitor
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","f")
  button.setAttribute("custom-attr-value",'')

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconList"></use></svg><span class="b3-menu__label">恢复为列表</span>`
  return button
}
function FixWidth(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.onclick=ViewMonitor
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","f")
  button.setAttribute("custom-attr-value","")

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">页面宽度</span>`
  return button
}
function AutoWidth(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","f")
  button.setAttribute("custom-attr-value","auto")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">自动宽度</span>`
  button.onclick=ViewMonitor
  return button
}
function vHeader(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.onclick=ViewMonitor
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","t")
  button.setAttribute("custom-attr-value","vbiaotou")

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">竖表头样式</span>`
  return button
}
function Removeth(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.onclick=ViewMonitor
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","t")
  button.setAttribute("custom-attr-value","biaotou")

  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">取消表头样式</span>`
  return button
}
function Defaultth(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","t")
  button.setAttribute("custom-attr-value","")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">默认表头样式</span>`
  button.onclick=ViewMonitor
  return button
}
function Error(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","error")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-1f6ab"></use></svg><span class="b3-menu__label">禁止</span>`
  button.onclick=ViewMonitor
  return button
}
function Warn(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","warn")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-26a0"></use></svg><span class="b3-menu__label">警告</span>`
  button.onclick=ViewMonitor
  return button
}
function Bug(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","bug")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-1f41b"></use></svg><span class="b3-menu__label">bug</span>`
  button.onclick=ViewMonitor
  return button
}
function Check(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","check")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-2705"></use></svg><span class="b3-menu__label">正确</span>`
  button.onclick=ViewMonitor
  return button
}
function Light(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","light")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-1f4a1"></use></svg><span class="b3-menu__label">灵感</span>`
  button.onclick=ViewMonitor
  return button
}
function Question(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","question")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-2753"></use></svg><span class="b3-menu__label">问题</span>`
  button.onclick=ViewMonitor
  return button
}
function Wrong(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","wrong")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-274c"></use></svg><span class="b3-menu__label">错误</span>`
  button.onclick=ViewMonitor
  return button
}
function Info(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","info")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-2139"></use></svg><span class="b3-menu__label">信息</span>`
  button.onclick=ViewMonitor
  return button
}
function Pen(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","pen")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-1f58b"></use></svg><span class="b3-menu__label">记录</span>`
  button.onclick=ViewMonitor
  return button
}
function Note(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","note")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-1f4d3"></use></svg><span class="b3-menu__label">汇总</span>`
  button.onclick=ViewMonitor
  return button
}
function Bell(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","bell")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#icon-1f514"></use></svg><span class="b3-menu__label">提醒</span>`
  button.onclick=ViewMonitor
  return button
}
function Defaultbq(selectid){
  let button = document.createElement("button")
  button.className="b3-menu__item"
  button.setAttribute("data-node-id",selectid)
  button.setAttribute("custom-attr-name","b")
  button.setAttribute("custom-attr-value","")
  button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconRefresh"></use></svg><span class="b3-menu__label">恢复默认样式</span>`
  button.onclick=ViewMonitor
  return button
}
function MenuSeparator(className = 'b3-menu__separator') {
  let node = document.createElement('button');
  node.className = className;
  return node;
}

/* 操作 */ 

/**
 * 获得所选择的块对应的块 ID
 * @returns {string} 块 ID
 * @returns {
 *     id: string, // 块 ID
 *     type: string, // 块类型
 *     subtype: string, // 块子类型(若没有则为 null)
 * }
 * @returns {null} 没有找到块 ID */
function getBlockSelected() {
    let node_list = document.querySelectorAll('.protyle-wysiwyg--select');
    if (node_list.length === 1 && node_list[0].dataset.nodeId != null) return {
        id: node_list[0].dataset.nodeId,
        type: node_list[0].dataset.type,
        subtype: node_list[0].dataset.subtype,
    };
    return null;
}

function ClickMonitor () {
  window.addEventListener('mouseup', MenuShow)
}

function MenuShow() {
  setTimeout(() => {
    let selectinfo = getBlockSelected()
      if(selectinfo){
      let selecttype = selectinfo.type
      let selectid = selectinfo.id
      if(selecttype=="NodeList"||selecttype=="NodeTable"||selecttype=="NodeBlockquote"){
        setTimeout(()=>InsertMenuItem(selectid,selecttype), 0)
      }
    }
  }, 0);
}


function InsertMenuItem(selectid,selecttype){
  let commonMenu = document.getElementById("commonMenu")
  let  readonly = commonMenu.querySelector(".b3-menu__item--readonly")
  let  selectview = commonMenu.querySelector('[id="viewselect"]')
  if(readonly){
    if(!selectview){
    commonMenu.insertBefore(ViewSelect(selectid,selecttype),readonly)
    commonMenu.insertBefore(MenuSeparator(),readonly)
    }
  }
}

function ViewMonitor(event){
  let id = event.currentTarget.getAttribute("data-node-id")
  let attrName = 'custom-'+event.currentTarget.getAttribute("custom-attr-name")
  let attrValue = event.currentTarget.getAttribute("custom-attr-value")
  let blocks = document.querySelectorAll(`.protyle-wysiwyg [data-node-id="${id}"]`)
  if(blocks){
    blocks.forEach(block=>block.setAttribute(attrName,attrValue))
  }
  let attrs={}
    attrs[attrName] =attrValue
  设置思源块属性(id,attrs)
}

setTimeout(()=>ClickMonitor(),1000)


