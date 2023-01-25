import React from 'react';
import logo from '../../img/logo2.svg';

import style from './header.module.css';

const Header = () => {
  return (

    <header className={`${style.header}`}>

      <div className={`${style.headerContainer}`}>
        <img src={logo} className={`${style.headerLogo}`} alt="vera logo" />
      </div>
      <div className={`${style.headerContainerM}`}>
        <span className={`${style.headerTextM}`}>
          <svg width="250" height="30" viewBox="0 0 250 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_188_6921)">
              <path d="M198.033 24.4512H210.737L209.467 19.5367L202.366 20.2837L202.189 14.7575H207.29L207.575 11.509L201.864 12.0214L201.7 6.69428L207.076 7.08857L207.733 3.57366L198.823 3.23816L198.033 24.4512Z" fill="#F8F8F8" />
              <path d="M209.595 8.10734L214.206 8.06816L213.292 24.5296L218.4 24.3863L217.99 8.16061H221.62L222.625 4.15223L210.204 3.67529L209.595 8.10734Z" fill="#F8F8F8" />
              <path d="M181.793 21.4016L178.926 21.142L179.344 3.20996L174.282 3.69426L175.366 21.0245L167.865 20.7122L167.688 3.34344L163.23 3.42486L162.297 24.7965L176.853 24L176.712 27.772H180.032L181.793 21.4016Z" fill="#F8F8F8" />
              <path d="M194.026 12.9704C193.645 12.638 191.832 12.0483 191.422 11.831C194.455 9.70649 198.481 1.33654 183.442 3.00369L183.55 24.6141C186.378 24.7629 191.954 24.758 194.082 22.909C195.402 21.7659 196.154 20.3376 196.215 18.5241C196.307 16.2019 195.57 14.3412 194.026 12.9704ZM187.176 5.37001C190.541 4.81225 191.103 6.49227 191.135 7.72594C191.176 9.30186 189.959 10.4321 187.225 10.6806L187.176 5.37001ZM192.962 18.4145C192.43 21.5829 189.468 21.3319 187.545 21.4157L187.576 13.8466C189.177 13.928 190.709 14.2292 191.746 15.158C192.604 15.9282 193.195 17.0137 192.962 18.4145Z" fill="#F8F8F8" />
              <path d="M222.051 15.4285C221.685 20.512 222.596 24.9006 226.319 25.7773C230.48 26.7465 233.151 22.6549 233.716 16.7865C234.618 7.40018 232.386 4.07692 229.387 3.54243C226.294 3.12182 222.561 6.47386 222.051 15.4285ZM225.373 17.3069C224.8 11.9247 226.536 7.8912 228.686 8.14651C230.454 8.35773 231.442 10.2018 230.903 15.9655C230.596 19.2894 228.609 20.8634 227.49 20.7912C226.005 20.6932 225.503 19.189 225.373 17.3069Z" fill="#F8F8F8" />
              <path d="M244.667 12.4078C245.777 11.1741 246.765 10.2802 246.765 8.39816C246.765 5.89956 245.087 3.01713 240.502 3.15183C240.502 3.15183 237.747 3.15182 235.796 3.28774L236.386 9.32204L235.632 24.6827C239.947 24.6827 243.557 24.6827 243.557 24.6827C247.098 24.6827 249.451 21.9251 249.451 18.1629C249.451 15.0373 247.099 13.4865 244.667 12.4078ZM239.406 6.21918C239.812 6.16775 240.985 6.16775 240.985 6.16775C241.819 6.11262 243.558 6.65204 243.558 7.91387C243.558 9.15673 243.042 11.0467 240.627 11.228C240.627 11.228 239.544 11.228 239.344 11.228L239.406 6.21918ZM241.879 21.4237C241.879 21.4237 240.437 21.4237 239.422 21.4237L239.578 14.6014C240.862 14.5212 242.391 14.5212 242.391 14.5212C243.558 14.4667 245.658 16.3396 245.658 18.1151C245.657 19.89 244.667 21.4237 241.879 21.4237Z" fill="#F8F8F8" />
              <path d="M150.152 22.8974C152.762 22.6194 155.382 20.981 155.482 12.6864C155.538 8.03697 153.976 4.699 150.328 5.26349C147.057 5.77165 145.736 9.17697 145.41 13.1957C144.726 20.2647 147.478 23.0774 150.152 22.8974ZM150.497 8.34493C151.497 8.33697 153.109 9.79044 153.049 12.6582C152.96 17.6437 151.892 19.1688 150.301 19.2662C148.362 19.3813 146.837 15.8082 147.884 11.2102C148.181 9.60186 149.159 8.35595 150.497 8.34493Z" fill="#F8F8F8" />
              <path d="M145.246 6.03613L135.87 7.16327L135.57 9.53817L139.178 9.40041L138.66 21.96L142.08 22.0549L141.772 9.2847L145.181 9.37837L145.246 6.03613Z" fill="#F8F8F8" />
              <path d="M133.656 17.3008C133.479 18.8063 131.988 19.4565 131.203 19.4577C129.956 19.4645 128.758 16.7535 128.752 13.811C128.744 10.5986 130.456 8.64488 131.821 8.22855C133.162 7.81284 133.443 8.99631 133.698 9.07284L135.002 6.71263C133.924 5.48202 132.444 5.55548 132.444 5.55548C129.243 5.39936 126.252 8.82304 126.004 14.0039C125.723 20.2457 128.197 22.4302 130.871 22.4106C132.936 22.3996 134.713 21.0288 135.523 18.5804L133.656 17.3008Z" fill="#F8F8F8" />
              <path d="M105.561 17.3027L106.812 17.2635L109.973 10.2882L109.863 21.9655L113.986 21.7188L112.441 5.88922L109.863 5.91127L106.286 13.8447L101.948 5.91127L99.7296 5.96451L99.5312 22.2631L103.02 21.9655L102.085 8.50594L105.561 17.3027Z" fill="#F8F8F8" />
              <path d="M93.6962 10.6427C96.1475 10.0084 96.0675 8.51205 96.0408 7.98858C95.9161 5.30876 91.3726 5.75448 87.0669 6.00488V22.0953C93.2711 22.2435 98.0634 21.5057 98.1806 16.3249C98.2218 14.6308 97.1394 11.7331 93.6962 10.6427ZM89.9167 7.55082C92.8993 7.3947 93.3604 8.08898 93.2252 8.92531C92.966 10.5306 89.7119 10.4308 89.7119 10.4308L89.9167 7.55082ZM94.9358 16.1676C94.7995 18.8816 90.6435 18.5988 89.2038 18.5394L89.5536 12.3031C93.8853 12.9943 95.0321 14.3608 94.9358 16.1676Z" fill="#F8F8F8" />
              <path d="M125.079 18.0435L118.38 18.3876L118.404 13.6715L123.662 13.8802L123.468 11.1215L118.265 11.1043L118.206 8.20411L123.841 8.23227L124.525 6.04841L115.912 5.88922L115.739 21.8817L125.491 21.5921L125.079 18.0435Z" fill="#F8F8F8" />
              <path d="M26.0898 28.0831L26.0382 20.6045L22.4378 20.6449L23.4198 0.531436L6.15533 0.284729L4.99816 4.96532L9.9558 4.64204C10.4053 7.65247 9.61531 12.4598 6.13155 19.9763L0.0283203 19.9714L1.34561 29.981L5.74642 29.3321L5.75106 24.3563L21.7017 24.3423L20.9297 28.2147L26.0898 28.0831ZM11.1008 20.3045C11.7139 16.7541 12.8746 11.6345 12.8862 4.34022L17.9952 4.10879L18.1484 20.5121L11.1008 20.3045Z" fill="#F8F8F8" />
              <path d="M59.9601 7.74609L54.1306 7.65609L54.7141 24.9441L48.3354 25.1002L49.4003 7.3365L43.2896 7.4614L43.6225 3.63304L59.9543 2.67181L59.9601 7.74609Z" fill="#F8F8F8" />
              <path d="M43.8864 19.8067L33.2431 20.8341L33.0772 14.8794L40.9566 14.7655L41.3359 10.8416L33.0047 11.5102L32.9247 6.66123L40.8231 6.98694L41.6706 3.61776L29.1584 2.69696L28.1602 24.7892H44.6694L43.8864 19.8067Z" fill="#F8F8F8" />
              <path d="M65.4058 25.1002L73.7544 9.79104L73.592 25.1455L79.7486 24.7157L78.6036 13.6598L78.5873 3.1751L74.7677 3.26449L66.4383 16.9163L65.9934 2.79245L62.0143 2.65778L62.487 7.3788L60.2266 25.1002H65.4058Z" fill="#F8F8F8" />
            </g>
            <defs>
              <clipPath id="clip0_188_6921">
                <rect width="250" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </span>


      </div>
    </header>
  )
}

export default Header