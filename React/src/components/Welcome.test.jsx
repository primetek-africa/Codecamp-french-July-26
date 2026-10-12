import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Welcome from './Welcome'
import Count from './Count'


test ('affiche le message de bienvenue',()=>{
   
  render(<Welcome />)

  const title = screen.getByText('Bienvenue dans notre application') // getby

  expect(title).toBeInTheDocument()
})


test ('increnter le compteur apres un click', async ()=>{
  const user = userEvent.setup()

  render(<Count/>)

  const button = screen.getByRole('button',{
    name: 'Incrementer'
  })

  await user.click(button)

//    expect(screen.getByText('Compteur: ').textContent).toBe('count: 1');
// // ou
// expect(countState).toBe(1); //

  expect(screen.getByText('Compteur: 1')).toBeInTheDocument()

})



//getBytext(): pour verifier l'existance d'un text precis dans le composant
//getByRole(): verifier l'existance d'une balise ou d'un element ,ex:input des btn 
// .btn-primary 


//getBy... : utilise lorsqu'on s'attend a trouver l'element ex: un btn un input,...
//queryBy: quand on veut verifier si un element n'existe pas 
//findBy : utilise quand un element apparait de maniere asychrone dans le composant