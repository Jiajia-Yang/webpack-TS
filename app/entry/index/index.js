
import * as Root from '../../modules/root'
import '../main.scss'

//import './styles/main'
//import handlebars from 'handlebars'
let  body = document.body
let app = document.createElement('div')
let link = document.createElement('link')
link.setAttribute("href","static/font/iconfont.css")
link.setAttribute("rel","stylesheet")
app.setAttribute("id", "pageOne")
document.head.appendChild(link)
body.appendChild(app)
new Root.Head();
new Root.Con();
