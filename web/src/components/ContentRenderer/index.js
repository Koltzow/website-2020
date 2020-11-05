import React from 'react'
import styles from './contentrenderer.module.css'

const saturateMarks = (block) => {
  if (block.markDefs && block.children && block.children.length > 0) {
    block.markDefs.forEach(mark => {
      block.children = block.children.map(child => {
        if (child.marks.includes(mark._key)) {
          return {...child, ...mark, _key: child._key}
        }
        return child
      })
    })
  }

  console.log(block)

  return block
}

const renderMarksClasses = (marks) => {
  if (!marks || marks.length <= 0) {
    return null
  }

  return marks.reduce((acc, curr) => {
    return acc + ' ' + styles[curr.replace('-', '')]
  }, '')
}

const renderListClasses = ({listItem, level}) => {
  if (!listItem) {
    return styles.reset
  }

  let className = styles[listItem]

  if (level) {
    className += ` ${styles['level' + level]}`
  }

  return className
}

const renderBlockChildren = (children) => {
  if (!children || children.length <= 0) {
    return null
  }

  return children.map(child => {
    if (child._type === 'link') {
      return <a href={child.href} target={'_blank'} rel={'noopener'} className={child.marks && renderMarksClasses(child.marks)} key={child._key} dangerouslySetInnerHTML={{__html: child.text}} />
    }

    return <span className={child.marks && renderMarksClasses(child.marks)} key={child._key} dangerouslySetInnerHTML={{__html: child.text}} />
  })
}

const renderBlock = (block) => {
  if (!block) {
    return null
  }

  block = saturateMarks(block)

  switch (block.style) {
    case 'h1':
      return <h1 className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</h1>
    case 'h2':
      return <h2 className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</h2>
    case 'h3':
      return <h3 className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</h3>
    case 'h4':
      return <h4 className={renderListClasses(block)}key={block._key}>{block.children && renderBlockChildren(block.children)}</h4>
    case 'h5':
      return <h5 className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</h5>
    case 'h6':
      return <h6 className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</h6>
    case 'normal':
      return <p className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</p>
    case 'blockquote':
      return <blockquote className={renderListClasses(block)} key={block._key}>{block.children && renderBlockChildren(block.children)}</blockquote>
    default:
      return null
  }
}

const renderBlocks = (blocks = []) => {
  let prevListItem = null
  let prevLevel = null

  return blocks.map(block => {
    if (block.listItem) {
      if (block.listItem !== prevListItem) {
        block.resetCount = true
      }

      if (prevLevel !== block.level) {
        block.resetLevel = true
      }
      prevLevel = block.level
      prevListItem = block.listItem
    } else {
      prevListItem = null
    }

    switch (block._type) {
      case 'block':
        return renderBlock(block)
      default:
        return null
    }
  })
}

const Index = ({blocks}) => {
  if (!blocks || blocks.length <= 0) {
    return null
  }

  return renderBlocks(blocks)
}

export default Index
