import fs from "fs"
import { ObjectTypeExtensionNode } from "graphql"
import path from 'path'

/**
 * @des 将数据写入json文件
 * @param { Object } data  json 格式的对象数据
 */

export default function(data: any) {
  try {
    const dataString = JSON.stringify(data, null, 4)
    fs.writeFileSync(path.join('./server/data/baiDuData.json'), dataString, 'utf8')
    return 'success'
  } catch (error) {
    console.error(error)
    return 'error'
  }
}