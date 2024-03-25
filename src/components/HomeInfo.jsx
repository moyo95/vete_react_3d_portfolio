import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";


const InfoBox = ({text, link, btnText }) => (
  <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          {text}
        </p>

        <Link to={link} className='neo-brutalism-white neo-btn'>
         {btnText}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>

  )
  

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>MORI</span>
        👋
        <br />
        名古屋出身のWebエンジニア
      </h1>
  ),
  2: (
    <InfoBox 
     text="多くの企業と協力し、その過程で多くのスキルを習得しました。"
     link="/about"
     btnText="Learn more"
     />
  ),
  3: (
    <InfoBox 
     text="長年にわたり複数のプロジェクトを成功に導きました。 その影響について興味がありますか?"
     link="/projects"
     btnText="Visit my portfolio"
     />
  ),
  4: (
    <InfoBox 
     text="プロジェクトを完了する必要がありますか、それとも開発者を探していますか? ほんの数回キーを押すだけの距離にあります。"
     link="/contact"
     btnText="Let's talk"
     />
  )
}


const HomeInfo = ({ currentStage }) => {
  
  return renderContent[currentStage] || null;
};

export default HomeInfo;