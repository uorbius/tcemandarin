import { useState, useEffect } from 'react'
import cl from '../../section.module.sass'
import Btn from '../../../UI/Btn'
import Hr from '../../../UI/Hr'

export default function Person({person, defaultActive = false, style = {}}) {

  const [active, setActive] = useState(defaultActive)

  useEffect(() => {
    setActive(defaultActive)
  }, [defaultActive])

  return (
    <div className={cl.Person}>
      <span>
        <div className={cl.Picture_inner}>
          <div
            className={cl.Picture}
            style={
                {
                  background: `url(${person.picture})`,
                  backgroundSize: 'cover',
                  ...style
                }
              }
          >
          </div>
        </div>
        <div className={cl.About}>
        <div className={cl.Details}>
          <h1 className={cl.Name}> { person.name }, { person.reg } </h1>
          <div className={cl.Hr}>
          </div>
          <div className={cl.PersonDetails}>
            <div className={cl.Block1}>
              <h3> { person.block1 } </h3>
            </div>
            <div className={cl.Block2}>
              { person.block2 }
            </div>
            <div className={`${cl.Visible_block} ${active ? cl.Active : ''}`}>
              <div className={cl.Block3} dangerouslySetInnerHTML={{__html: person.block3}}>
              </div>
              <div className={cl.Block4}>
                {
                  person.quote &&
                  <div className={cl.Quote}>
                    <span className={cl.Quote_bracket}> " </span> { person.quote } <span className={cl.Quote_bracket}> " </span>
                  </div>
                }
                <div className={cl.Soc_container}>
                  {
                    person.wechat &&
                    <div className={cl.Soc}>
                      <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24">
                        <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.665-6.984c1.016-.736 1.665-1.825 1.665-3.035 0-2.218-2.158-4.016-4.819-4.016-2.662 0-4.819 1.798-4.819 4.016s2.157 4.016 4.819 4.016c.55 0 1.081-.079 1.573-.22l.141-.021c.093 0 .177.028.256.074l1.055.609.093.03c.089 0 .161-.072.161-.161l-.026-.117-.217-.811-.017-.102c0-.108.053-.203.135-.262zm-8.552-11.485c-3.194 0-5.783 2.158-5.783 4.82 0 1.452.779 2.759 1.998 3.642.098.07.162.185.162.314l-.02.123-.261.972-.031.141c0 .107.086.193.193.193l.111-.036 1.266-.731c.096-.055.196-.089.307-.089l.17.025c.591.17 1.228.265 1.888.265l.318-.008c-.126-.376-.194-.772-.194-1.181 0-2.427 2.361-4.395 5.274-4.395l.314.008c-.436-2.302-2.827-4.063-5.712-4.063zm3.791 7.807c-.355 0-.642-.287-.642-.642 0-.355.287-.643.642-.643.355 0 .643.288.643.643 0 .355-.288.642-.643.642zm3.213 0c-.355 0-.642-.287-.642-.642 0-.355.287-.643.642-.643.355 0 .643.288.643.643 0 .355-.288.642-.643.642zm-8.932-3.759c-.425 0-.771-.345-.771-.771 0-.426.346-.771.771-.771.426 0 .772.345.772.771 0 .426-.346.771-.772.771zm3.856 0c-.426 0-.771-.345-.771-.771 0-.426.345-.771.771-.771.426 0 .771.345.771.771 0 .426-.345.771-.771.771z"/>
                      </svg>
                      <span> { person.wechat } </span>
                    </div>
                  }
                  {
                    person.telegram &&
                    <div className={cl.Soc}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,24l-14,0c-2.761,0 -5,-2.239 -5,-5l0,-14c0,-2.761 2.239,-5 5,-5l14,0c2.762,0 5,2.239 5,5l0,14c0,2.761 -2.238,5 -5,5Zm-2.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z"/></svg>
                      <span> { person.telegram } </span>
                    </div>
                  }
                  {
                    person.viber &&
                    <div className={cl.Soc}>
                      <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.806-17.791c-.419-.386-2.114-1.616-5.887-1.633 0 0-4.451-.268-6.62 1.722-1.207 1.208-1.632 2.974-1.677 5.166-.045 2.192-.103 6.298 3.855 7.411l.004.001-.002 1.699s-.025.688.427.828c.548.17.87-.353 1.393-.916.287-.309.683-.764.982-1.111 2.707.227 4.789-.293 5.026-.37.547-.178 3.639-.574 4.142-4.679.519-4.234-.251-6.911-1.643-8.118zm.458 7.812c-.425 3.428-2.933 3.645-3.395 3.793-.197.063-2.026.518-4.325.368 0 0-1.714 2.067-2.249 2.605-.083.084-.181.118-.247.102-.092-.023-.118-.132-.116-.291l.014-2.824c-3.348-.93-3.153-4.425-3.115-6.255.038-1.83.382-3.33 1.403-4.338 1.835-1.662 5.615-1.414 5.615-1.414 3.192.014 4.722.976 5.077 1.298 1.177 1.008 1.777 3.421 1.338 6.956zm-6.025.206s.3.026.461-.174l.315-.396c.152-.196.519-.322.878-.122.475.268 1.09.69 1.511 1.083.232.196.286.484.128.788l-.002.006c-.162.288-.38.557-.655.807l-.006.005c-.309.258-.665.408-1.046.284l-.007-.01c-.683-.193-2.322-1.029-3.367-1.862-1.709-1.349-2.923-3.573-3.26-4.765l-.01-.007c-.124-.382.027-.738.284-1.046l.005-.006c.251-.275.52-.492.807-.655l.006-.001c.304-.159.592-.105.788.127.258.267.743.908 1.083 1.511.2.359.075.726-.122.878l-.396.315c-.2.161-.174.461-.174.461s.586 2.219 2.779 2.779zm3.451-1.84c.118-.001.213-.097.212-.215-.011-1.404-.441-2.531-1.278-3.348-.835-.814-1.887-1.231-3.126-1.24h-.001c-.117 0-.213.094-.214.212 0 .118.094.214.212.215 1.125.008 2.078.384 2.831 1.119.753.734 1.139 1.759 1.149 3.046.001.117.096.211.213.211h.002zm-1.123-.438h-.005c-.118-.003-.211-.1-.208-.218.016-.73-.192-1.32-.637-1.806-.443-.484-1.051-.749-1.86-.808-.117-.009-.206-.111-.197-.228.009-.118.111-.206.228-.198.91.067 1.631.385 2.144.946.515.562.767 1.27.748 2.103-.002.117-.097.209-.213.209zm-1.095-.367c-.113 0-.207-.089-.213-.203-.036-.724-.377-1.079-1.074-1.116-.117-.007-.208-.107-.201-.225.006-.117.106-.208.224-.201.919.049 1.43.575 1.477 1.521.006.118-.084.218-.202.224h-.011z"/></svg>
                      <span> { person.viber } </span>
                    </div>
                  }
                  {
                    person.whatsup &&
                    <div className={cl.Soc}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>
                      <span> { person.whatsup } </span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </span>
      { !active && <Btn onClick={() => setActive(active ? false : true)} variant='rounded'> Подробнее </Btn> }
    </div>
  )
}
