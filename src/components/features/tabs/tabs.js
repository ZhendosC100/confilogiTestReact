import React, {useState} from 'react';
import TabContent from '../tabContent';

// import FeatureTab from '../../../assets/illustration-features-tab-1.svg'
import TabsTitleItem from '../tabsTitleItem';

const Tabs = () => {
 
  const tabContent = [
    {
      tabTitle: 'Simple Bookmarking',
      title: 'Bookmark in one klick',
      imgLink: 'http://confilogi-test.tretsyak.pl/assets/illustration-features-tab-1.svg', 
      content: 'A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.'
    },
    {
      tabTitle: 'Speedy Searching',
      title: 'Intelligent search',
      imgLink: 'http://confilogi-test.tretsyak.pl/assets/illustration-features-tab-2.svg', 
      content: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawi throught all of your bookmarks.'
    },
    {
      tabTitle: 'Easy Sharing',
      title: 'Share your bookmarks',
      imgLink: 'http://confilogi-test.tretsyak.pl/assets/illustration-features-tab-3.svg', 
      content: 'Easily share your bookmarks and collections whith others. Create a shareable link that you can send at the click of a button.'
    },
  ]

  const [active, setActive] = useState(0);

  const openTab = e => {
    setActive(+e.target.dataset.index)
  }

  const tabTitles = tabContent.map((item, index) => {
    return (
      <TabsTitleItem key={index} index={index} title={item.tabTitle} openTab={openTab} active={active}/>
    )
  })


  return (
    <>
      <div className="tabs_controls-wrapper">
          {tabTitles}
      </div>

      <div className="tab_content-wrapper">
        <TabContent tabContent={tabContent[active]}/>
      </div>
    </>
  )
};

export default Tabs;