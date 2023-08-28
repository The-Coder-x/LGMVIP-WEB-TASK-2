import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const UserForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phoneNO: '',
    course: '',
    image: '',
  });
  const [items, setItems] = useState([]);
  const [img, setImg] = useState('');
  const handler = e => {
    e.preventDefault();
    if (data === ' ') {
      return;
    } else {
      setItems([...items, data]);
      setData({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phoneNO: '',
        course: '',
      });
      setImg(null);
    }
  };
  const changeImageHandler = e => {
    const file = e.target.files[0];
    setImg(e.target.files);
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setData({ ...data, image: reader.result });
    };
  };

  return (
    <div>
      <Text fontSize={'4xl'}>Student User Form </Text>
      <Box
        border={'2px solid white'}
        width={'70vw'}
        margin={'1em auto'}
        padding={'1em'}
      >
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First name"
            type="text"
            value={data.firstName}
            onChange={e => setData({ ...data, firstName: e.target.value })}
          />
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Last name"
            type="text"
            value={data.lastName}
            onChange={e => setData({ ...data, lastName: e.target.value })}
          />
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select Gender"
            value={data.gender}
            onChange={e => setData({ ...data, gender: e.target.value })}
          >
            <option>Male</option>
            <option>Female</option>
            <option disabled>Other</option>
          </Select>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Ex. abc123@gmail.com"
            type="email"
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <FormLabel>Phone No.</FormLabel>
          <Input
            placeholder="Enter Your Phone Number "
            type="number"
            value={data.phoneNO}
            onChange={e => setData({ ...data, phoneNO: e.target.value })}
          />
          <FormLabel>Course</FormLabel>
          <Select
            placeholder="Select Course"
            value={data.course}
            onChange={e => setData({ ...data, course: e.target.value })}
          >
            <option>CSE</option>
            <option>IT</option>
            <option>EEE</option>
            <option>CSE AI</option>
          </Select>
          <FormLabel>Upload Image </FormLabel>
          <Input
            accept="image/*"
            required
            id="chooseAvatar"
            type={'file'}
            focusBorderColor="yellow.500"
            // value={img}
            onChange={changeImageHandler}
          />
          <Button
            type="submit"
            m={'1rem'}
            width={'60%'}
            _hover={{ bg: '#2a6e90' }}
            onClick={handler}
          >
            Submit
          </Button>
        </FormControl>
      </Box>

      <SimpleGrid columns={[1, 2]} spacing="40px">
        {items.map((ele, idx) => {
          return (
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              h={'15rem'}
              key={idx}
              borderRadius={'15px'}
              border={"1px solid white"}
            >
              <Box
                width={'70%'}
                display={'flex'}
                justifyContent={'space-evenly'}
                flexDirection={'column'}
                alignItems={'start'}
                padding={'10px'}
              >
                <Text>
                  Name : {ele.firstName} {ele.lastName}
                </Text>
                <Text>Gender : {ele.gender}</Text>
                <Text>Email : {ele.email}</Text>
                <Text>Phone No. : {ele.phoneNO}</Text>
                <Text>Course : B.Tech{ele.course}</Text>
              </Box>
              <Box
                width={'30%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Box
                  h={'150px'}
                  w={'150px'}
                  borderRadius={'100px'}
                  color={'while'}
                >
                  <Avatar src={ele.image} size={'2xl'} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default UserForm;
