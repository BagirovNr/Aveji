import smfoto from '../../../public/img/smfoto.svg'
import space from '../../../public/img/space.svg'
function Demonstration() {
  return (
    <>
    <div className='flex justify-between items-end'>
        <p className='font-semibold text-7xl leading-[86px] w-[794px] text-[#212529]'>Эксклюзивная и нестандартная мебель для дома</p>
        <p className='font-normal text-lg leading-5 border-b'>ЗАКАЗАТЬ ПРОЕКТ</p>
    </div>

<div className='flex justify-between'>
    <div className='flex flex-col gap-60'>
<div >
<p className='w-[445px] leading-7 text-xl font-normal'>Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</p>
</div>
<div>
    <img src={smfoto} alt="" />
</div>
    </div>
    <div>
        <img className='max-w-fit' src={space} alt="" />
    </div>
</div>
    </>
  )
}

export default Demonstration;