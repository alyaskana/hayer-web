import { responsesFetcher } from "api/responses";
import { Button } from "components/Button/Button";
import { Form, FieldSet, Label, TextArea, Input } from "components/form";
import { Title, Caption_2 } from "components/Typography";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  post_id: number;
  description: string;
  link: string;
};

export const CreateResponseForm: FC = ({ control }) => {
  return (
    <>
      <Form mt="8px">
        <FieldSet mb="24px">
          <Title>Оставить отклик</Title>
        </FieldSet>
        <FieldSet mb="24px">
          <Label>
            <Caption_2>Комментарий</Caption_2>
          </Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                placeholder="Расскажи как и когда сможешь выполнить заказ"
                {...field}
              />
            )}
          />
        </FieldSet>
        <Label>
          <Caption_2>
            Ссылка на схожую работу, картинку или что-то еще
          </Caption_2>
        </Label>
        <Controller
          name="link"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form>
      <Button
        margin="8px 0 0"
        variant="bigPrimary"
        text="Откликнуться"
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};
