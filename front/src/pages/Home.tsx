import { NavContextProvider } from '../components/context/navContext'
import { ContactMe } from '../components/ui/TUIContactMe'
import { NavBar } from '../components/ui/TUINav'
import { Projects } from '../components/ui/TUIProjects'
import { Skills } from '../components/ui/TUISkills'

export function Home() {

  return (
	<div className='flex flex-col w-screen text-[10px] md:text-base'>
		<div className='flex w-full justify-center my-12'>
			<p className='leading-none text-(--yellow)'>
&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
|&nbsp;&nbsp;_&nbsp;\&nbsp;___&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;__&nbsp;_|&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;_&nbsp;\&nbsp;_&nbsp;__&nbsp;___&nbsp;&nbsp;&nbsp;__&nbsp;_&nbsp;<br/>
|&nbsp;|_)&nbsp;/&nbsp;_&nbsp;\|&nbsp;|&nbsp;|&nbsp;|/&nbsp;_`&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;|_)&nbsp;|&nbsp;'__/&nbsp;_&nbsp;\&nbsp;/&nbsp;_`&nbsp;|<br/>
|&nbsp;&nbsp;_&nbsp;&lt;&nbsp;(_)&nbsp;|&nbsp;|_|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;|___|&nbsp;&nbsp;__/|&nbsp;|&nbsp;|&nbsp;(_)&nbsp;|&nbsp;(_|&nbsp;|<br/>
|_|&nbsp;\_\___/&nbsp;\__,&nbsp;|\__,_|_____|_|&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;\___/&nbsp;\__,&nbsp;|<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___/&nbsp;<br/>
			</p>
		</div>
		<NavContextProvider>
			<NavBar />
			<Projects />
			<Skills />
			<ContactMe />
		</NavContextProvider>
	</div>
  )
}
