const list = {
    list1: {
        name: "Идея",
        title: "Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам."
    },
    list2: {
        name: "Техническое задание",
        title: "Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты."
    },
    list3: {
        name: "Коммерческое предложение",
        title: "Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение"
    },
    list4: {
        name: "Подготовка рабочего проекта",
        title: "Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству."
    },
    list5: {
        name: "Производство и монтаж",
        title: "Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно."
    }
};






function HowWeWork() {
  return (
    <section>
        <div className="flex gap-32 ">
            <div className="flex-1">
                <h2 className="text-5xl leading-10 ">
                Как мы работаем
                </h2>
            </div>
            
            <div className="flex-1 flex flex-col gap-20">
                <p className=" self-start text-base leading-6 flex-1 w-[325px]">Алгоритм работы с нами для удобства и понимания проекта</p>

                {Object.entries(list).map(([key,item])=>(
         <div key={key} className="flex gap-20">
            <h1 className="text-4xl">{item.name}</h1>
            <p>{item.title}</p>
        </div>
       ))}
            </div>
           
            
        </div>
      

       

    </section>
)
}

export default HowWeWork