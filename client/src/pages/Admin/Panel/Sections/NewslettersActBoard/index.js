import cl from './index.module.sass'
import { useNavigate } from 'react-router-dom'

export default function NewslettersView() {

  const navigate = useNavigate()

  return (
    <div className={cl.NewslettersActBoard_container}>
      <div className={cl.Select_container}>
        <div className={cl.Select} onClick={() => navigate('/admin/newsletter/delete_select')}>
          <div className={cl.Select_content}>
            <div className={cl.Select_icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.354 100.352">
                <path d="M91.267,27.322c-0.259-1.522-1.091-2.95-2.343-4.02l-1.096-0.936c-0.914-0.78-1.98-1.31-3.09-1.547l2.973-3.479  c0.995-1.165,1.392-2.701,1.114-4.324c-0.26-1.522-1.092-2.949-2.344-4.019l-1.096-0.936c-2.667-2.276-6.447-2.236-8.433,0.088  l-2.972,3.479c-0.407-1.059-1.098-2.03-2.011-2.81l-1.096-0.936c-1.253-1.069-2.792-1.668-4.336-1.687c-0.025,0-0.051,0-0.075,0  c-1.616,0-3.043,0.63-4.023,1.778L53.429,18.52c-0.396-1.036-1.07-2.016-2.006-2.815l-1.096-0.936  c-2.662-2.274-6.445-2.235-8.433,0.088L20.777,39.572c-0.987,1.155-1.835,2.432-2.521,3.796c-0.064,0.128-0.11,0.265-0.136,0.406  l-1.836,10.134c-0.981,5.42-3.313,10.406-6.744,14.422l-0.528,0.618c-0.259,0.303-0.386,0.695-0.355,1.092  c0.031,0.396,0.219,0.765,0.521,1.023l26.197,22.384c0.283,0.241,0.629,0.359,0.974,0.359c0.423,0,0.844-0.179,1.141-0.525  c3.76-4.4,8.828-7.646,14.655-9.385l9.037-2.697c0.136-0.041,0.265-0.1,0.384-0.177c1.568-1.011,2.97-2.232,4.167-3.633  l13.817-16.172c1.982-2.325,1.431-6.069-1.231-8.345c0,0,0,0-0.001,0l-1.095-0.936c-0.935-0.799-2.008-1.312-3.094-1.542  L90.15,31.648C91.146,30.482,91.543,28.945,91.267,27.322z M87.869,29.698l-17.41,20.376c-0.002,0.002-0.004,0.003-0.006,0.006  L59.349,63.077c-0.538,0.63-0.464,1.577,0.166,2.115c0.283,0.241,0.629,0.359,0.974,0.359c0.424,0,0.845-0.179,1.142-0.525  l9.439-11.049c0.001-0.002,0.003-0.003,0.004-0.004c0.896-1.046,2.821-0.937,4.202,0.245l1.095,0.936  c1.382,1.181,1.793,3.067,0.898,4.116l-13.816,16.17c-0.962,1.126-2.084,2.116-3.336,2.946l-8.828,2.635  c-5.881,1.755-11.064,4.92-15.078,9.193L12.262,69.752c3.535-4.324,5.941-9.602,6.975-15.309l1.797-9.917  c0.56-1.078,1.24-2.089,2.025-3.006l21.116-24.715c0.897-1.049,2.822-0.937,4.204,0.244l1.096,0.936  c1.38,1.179,1.791,3.059,0.9,4.108c-0.001,0.001-0.003,0.002-0.004,0.004L39.955,34.286c-0.539,0.63-0.464,1.577,0.166,2.115  c0.283,0.242,0.629,0.36,0.974,0.36c0.423,0,0.844-0.178,1.141-0.525l10.408-12.179c0.003-0.003,0.007-0.006,0.01-0.009  L64.722,9.921c0.4-0.469,1.02-0.727,1.744-0.727c0.012,0,0.024,0,0.037,0c0.843,0.01,1.704,0.354,2.423,0.969l1.096,0.936  c0.72,0.614,1.193,1.411,1.336,2.242c0.123,0.722-0.03,1.379-0.427,1.855l-22.5,26.332c-0.538,0.63-0.463,1.577,0.166,2.115  c0.283,0.241,0.629,0.359,0.974,0.359c0.423,0,0.844-0.178,1.141-0.525l22.475-26.303c0.004-0.004,0.008-0.007,0.012-0.011  c0.002-0.002,0.004-0.005,0.007-0.008l6.029-7.058c0.896-1.049,2.82-0.936,4.202,0.245l1.096,0.936  c0.72,0.614,1.194,1.411,1.336,2.242c0.124,0.73-0.031,1.395-0.438,1.871l-4.752,5.562c-0.004,0.004-0.009,0.007-0.012,0.012  L56.907,48.771c-0.538,0.63-0.464,1.577,0.166,2.115c0.283,0.242,0.629,0.36,0.974,0.36c0.424,0,0.845-0.179,1.142-0.526  l22.474-26.303c0.004-0.004,0.008-0.007,0.012-0.012v0c0.4-0.469,1.02-0.727,1.744-0.727c0.012,0,0.024,0,0.037,0  c0.843,0.01,1.704,0.354,2.423,0.969l1.096,0.936c0.72,0.614,1.193,1.41,1.335,2.242C88.434,28.556,88.277,29.221,87.869,29.698z"/>
              </svg>
            </div>
            <div className={cl.Select_title}>
              Найти и удалить новость вручую
            </div>
          </div>
        </div>
        <div className={cl.Select} onClick={() => navigate('/admin/newsletter/delete_by_id')}>
          <div className={cl.Select_content}>
            <div className={cl.Select_icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.176 100.178">
                <path d="M84.5,34.481c0-0.005-0.002-0.01-0.002-0.016c-0.001-0.06-0.01-0.119-0.018-0.179c-0.005-0.04-0.006-0.081-0.015-0.121  c-0.009-0.039-0.025-0.078-0.036-0.117c-0.017-0.057-0.033-0.115-0.057-0.17c-0.002-0.005-0.003-0.01-0.005-0.015  C78.211,20.223,65.363,12.079,50,12.079c-20.911,0-37.924,17.012-37.924,37.922c0,20.91,17.013,37.921,37.924,37.921  c7.945,0,15.553-2.432,21.999-7.031c0.675-0.48,0.831-1.418,0.35-2.092c-0.48-0.675-1.419-0.831-2.092-0.35  c-5.936,4.234-12.94,6.473-20.257,6.473c-19.257,0-34.924-15.666-34.924-34.921c0-19.256,15.667-34.922,34.924-34.922  c14.257,0,25.716,7.198,31.5,19.75l0.007,20.228c0,4.461-3.629,8.091-8.089,8.091c-4.352,0-8.313-3.977-8.468-8.415  c0.454-1.499,0.704-3.087,0.704-4.732c0-9.018-7.337-16.354-16.354-16.354s-16.354,7.336-16.354,16.354  c0,9.018,7.336,16.354,16.354,16.354c5.682,0,10.692-2.916,13.624-7.326c1.822,4.102,5.948,7.119,10.494,7.119  c6.114,0,11.089-4.976,11.089-11.092L84.5,34.481z M49.3,63.355c-7.363,0-13.354-5.99-13.354-13.354  c0-7.363,5.991-13.354,13.354-13.354s13.354,5.991,13.354,13.354c0,1.323-0.2,2.599-0.56,3.807  c-0.063,0.129-0.109,0.266-0.134,0.412C60.189,59.52,55.188,63.355,49.3,63.355z"/>
              </svg>
            </div>
            <div className={cl.Select_title}>
              Удалить новость по идентификатору
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}