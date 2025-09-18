import './event-form.style.css';
import { FormField } from "../FormField";
import { InputField } from "../Inputfield";
import { FormTitle } from "../FormTitle";
import { Label } from "../Label";
import { EventButton } from '../EventButton';
import { DropdownList } from '../DropDownList';

export function FormEvent({ themes, whenSubmit }) {

  function onSubmitForm(formData){
    const eventData = {
      eventTitle: formData.get("eventName"),
      cover: formData.get("coverEvent"),
      date: new Date(formData.get("eventDate")),
      theme: themes.find(function(item){
        return item.id == formData.get("theme")
      })
    }

    whenSubmit(eventData);
  }

  return (
    <form className='event-form' action={onSubmitForm}>
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
            name='eventName'
          />
          <FormField>
            <Label htmlFor="coverEvent">
              Qual o endereço da imagem de capa?
            </Label>
            <InputField
              type="text"
              id="coverEvent"
              placeholder="https//img.com"
              name="coverEvent"
            />
          </FormField>
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
         <DropdownList id="theme" name="theme" items={themes}/>
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