import './event-form.style.css';
import { FormField } from "../FormField";
import { InputField } from "../Inputfield";
import { FormTitle } from "../FormTitle";
import { Label } from "../Label";
import { EventButton } from '../EventButton';
import { DropdownList } from '../DropDownList';

export function FormEvent() {
  return (
    <form className='event-form'>
      <FormTitle>
        Preencha para criar um evento:
      </FormTitle>
      <div className='fields'>
        <FormField>
          <Label htmlFor="eventName">
            Qual o nome do evento?
          </Label>
          <InputField
            type="text"
            id='eventName'
            placeholder='Summer dev hits'
            name='EventName'
          />
        </FormField>
        <FormField>
          <Label htmlFor="eventDate">
            Data do Evento
          </Label>
          <InputField
            type="date"
            id='eventDate'
            placeholder='XX/XX/XXXX'
            name='eventDate'
          />
        </FormField>
        <FormField>
          <Label htmlFor="eventDate">
            Selecione um Tema
          </Label>
         <DropdownList/>
        </FormField>
      </div>
      <div className='actions'>
        <EventButton>
          Criar Evento
        </EventButton>
      </div>


    </form>
  )
}