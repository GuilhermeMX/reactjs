export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="">Durante</label>
        <input type="number" id="minutesAmount" />
      
        <span>minutos.</span>      
      </form>
    </div>

    <div>
      <span>0</span>
      <span>0</span>
      <span></span>
    </div>
  )
}
