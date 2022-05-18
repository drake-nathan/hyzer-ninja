import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import * as yup from 'yup';
import { ThemeContext } from '../../contexts/contextIndex';
import { marks } from './formConstants';
import { addDisc } from '../../actions/actionsIndex';
import { IDiscTypesJS } from '../../types/typesindex';
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
  const [discType, setDiscType] = useState('');
  const [newDisc, setNewDisc] = useState<IDiscTypesJS>({
    title: '',
    brand: '',
    type: '',
    mold: '',
    basePlastic: '',
    subPlastic: '',
    run: '',
    condition: 0,
    price: 0,
    imageUrl: '',
  });

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { register, handleSubmit } = useForm<FormTypes>({
    resolver: yupResolver(discSchema),
  });

  const handleDiscTypeChange = (e: SelectChangeEvent) => {
    setDiscType(e.target.value);
    setNewDisc((currentValues) => ({
      ...currentValues,
      type: e.target.value,
    }));
  };

  const handleSliderChange = (value: number) => {
    setNewDisc((currentValues) => ({
      ...currentValues,
      condition: value,
    }));
    console.log(value);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    setNewDisc((currentValues) => ({
      ...currentValues,
      [inputType]: e.target.value,
    }));
  };

  const onSubmit: SubmitHandler<FormTypes> = () => {
    addDisc(newDisc);
    console.log(newDisc);
  };

  return (
    <St.Container>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.DiscFormDiv>
          <St.Label>Listing Title:</St.Label>
          <St.Input
            {...register('title')}
            theme={theme}
            placeholder="Title"
            onChange={(e) => handleFormChange(e, 'title')}
          />
          <St.Label>Brand:</St.Label>
          <St.Input
            {...register('brand')}
            theme={theme}
            placeholder="Discmania, Discraft..."
            onChange={(e) => handleFormChange(e, 'brand')}
          />
          <St.Label>Disc Mold:</St.Label>
          <St.Input
            {...register('mold')}
            theme={theme}
            placeholder="Destroyer, P2, Harp..."
            onChange={(e) => handleFormChange(e, 'mold')}
          />
          <St.Label>Type:</St.Label>
          <St.Dropdown
            theme={theme}
            value={discType}
            label="Disc Type"
            onChange={handleDiscTypeChange}
          >
            <MenuItem value="putter">Putter</MenuItem>
            <MenuItem value="approach">Approach</MenuItem>
            <MenuItem value="mid">Mid-Range</MenuItem>
            <MenuItem value="fairway">Fairway Driver</MenuItem>
            <MenuItem value="distance">Distance Driver</MenuItem>
          </St.Dropdown>
          <St.Label>Base Plastic:</St.Label>
          <St.Input
            {...register('basePlastic')}
            theme={theme}
            placeholder="Star, C-Line, ESP..."
            onChange={(e) => handleFormChange(e, 'basePlastic')}
          />
          <St.Label>Sub Plastic:</St.Label>
          <St.Input
            {...register('subPlastic')}
            theme={theme}
            placeholder="Glow, Swirly, Metal-Flake..."
            onChange={(e) => handleFormChange(e, 'subPlastic')}
          />
          <St.Label>Disc Run:</St.Label>
          <St.Input
            {...register('run')}
            theme={theme}
            placeholder="2nd Run, McBeth 4x..."
            onChange={(e) => handleFormChange(e, 'run')}
          />
          <St.Label>Disc Condition:</St.Label>
          <St.CustomSlider
            theme={theme}
            aria-label="Disc Condition"
            defaultValue={7}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={1}
            max={10}
            onChangeCommitted={(_, value) =>
              handleSliderChange(value as number)
            }
          />
          <St.Label>Price:</St.Label>
          <St.Input
            type="number"
            {...register('price')}
            theme={theme}
            placeholder="Whole dollars including shipping"
            onChange={(e) => handleFormChange(e, 'price')}
          />
          <St.Label>Image:</St.Label>
          <St.Input
            type="file"
            {...register('imageUrl')}
            theme={theme}
            onChange={(e) => handleFormChange(e, 'imageUrl')}
          />
        </St.DiscFormDiv>
        <St.SubmitButton type="submit" theme={theme}>
          Create Listing
        </St.SubmitButton>
      </St.Form>
    </St.Container>
  );
};

export default DiscForm;
