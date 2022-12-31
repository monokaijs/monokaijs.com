import {AuthorBio} from "../components/app/AuthorBio";
import {PostList} from "../components/app/PostList";


export default function Home() {
  return (
    <div>
      <AuthorBio/>
      <div className={'content-container'}>
        <div className={'col-left'}>
          <h3>
            Recent Posts
          </h3>
          <PostList/>
        </div>
        <div className={'col-right'}>

        </div>
      </div>
    </div>
  )
}
