import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThemeContext } from '../../contexts/contextIndex';
import * as St from './Form.styled';

const discSchema = yup.object({
  title: yup.string(),
  brand: yup.string(),
  mold: yup.string(),
  type: yup.string(),
  basePlastic: yup.string(),
  subPlastic: yup.string(),
  run: yup.string(),
  condition: yup.number(),
  price: yup.number(),
  imageUrl: yup.string(),
});

type FormTypes = yup.InferType<typeof discSchema>;

const DiscForm: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { register, handleSubmit } = useForm<FormTypes>({
    resolver: yupResolver(discSchema),
  });

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <St.Container>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.DiscFormDiv>
          <St.Label>Listing Title:</St.Label>
          <St.Input
            {...register('title')}
            theme={theme}
            placeholder="Listing Title"
          />
          <St.Label>Brand:</St.Label>
          <St.Input
            {...register('brand')}
            theme={theme}
            placeholder="Brand (Discmania, Discraft, etc)"
          />
          <St.Label>Type:</St.Label>
          <St.Input {...register('type')} theme={theme} />
          <St.Label>Disc Mold:</St.Label>
          <St.Input {...register('mold')} theme={theme} placeholder="Title" />
          <St.Label>Base Plastic:</St.Label>
          <St.Input {...register('basePlastic')} theme={theme} />
          <St.Label>Sub Plastic:</St.Label>
          <St.Input {...register('subPlastic')} theme={theme} />
          <St.Label>Disc Run:</St.Label>
          <St.Input {...register('run')} theme={theme} />
          <St.Label>Disc Condition:</St.Label>
          <St.Input {...register('condition')} theme={theme} />
          <St.Label>Price:</St.Label>
          <St.Input {...register('price')} theme={theme} />
          <St.Label>Image:</St.Label>
          <St.Input {...register('imageUrl')} theme={theme} />
        </St.DiscFormDiv>
        <St.SubmitButton type="submit" theme={theme}>
          Create Listing
        </St.SubmitButton>
      </St.Form>
    </St.Container>
  );
};

export default DiscForm;
