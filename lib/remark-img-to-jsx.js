const fetch = require('sync-fetch')

import { getDataURL } from './api'
import { visit } from 'unist-util-visit'

export default function remarkImgToJsx() {
  return (tree) => {
    visit(
      tree,
      // only visit p tags that contain an img element
      (node) => node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node) => {
        const imageNode = node.children.find((n) => n.type === 'image')
        // only local files

        const imgURL = getDataURL('images.json')
        const images = fetch(imgURL).json()
        const img = images.find((i) => i.id === imageNode.url)
        if (img) {
          // Convert original node to next/image
          ;(imageNode.type = 'mdxJsxFlowElement'),
            (imageNode.name = 'Image'),
            (imageNode.attributes = [
              { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
              { type: 'mdxJsxAttribute', name: 'publicId', value: img.id },
              { type: 'mdxJsxAttribute', name: 'width', value: img.width },
              { type: 'mdxJsxAttribute', name: 'height', value: img.height },
            ])

          // Change node type from p to div to avoid nesting error
          node.type = 'div'
          node.children = [imageNode]
        }
      }
    )
  }
}
