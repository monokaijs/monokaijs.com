
const links = [{
  title: 'Home',
  path: '/'
}, {
  title: 'Tags',
  path: '/tags'
}, {
  title: 'Projects',
  path: '/projects'
}, {
  title: 'Tools',
  path: '/tools'
}]

export const BlogHeader = () => {
  return (
    <div className={'blog-header'}>
      <div className={'navbar'}>
        <div className={'title'}>
          MonokaiJs.com
        </div>
      </div>
      <div className={'blog-links'}>
        {links.map(link => (
          <a key={link.title + '_' + link.path} href={link.path}>{link.title}</a>
        ))}
      </div>
    </div>
  )
}
