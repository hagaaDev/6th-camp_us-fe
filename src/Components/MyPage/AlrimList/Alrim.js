import React, { useState, useEffect, useContext } from 'react';
import * as api from '../../../Service/camps';
import { CloseOutlined } from '@ant-design/icons';
import Image from '../../../Assets/Images/default.png';
import {
  AlrimWrap,
  CheckedArea,
  Thumbnail,
  Thumb,
  Info,
  TopArea,
  AlrimInfo,
  Type,
  AlrimContent,
  DeleteBtn,
  BottomArea,
  AlrimFrom,
  Date,
} from './AlrimList.styles';

export default function Alrim({ alrim }) {
  /* 선택한 알림 삭제 */
  const handleOnDelete = async (id) => {
    console.log('선택한 id =', id);
    const response = await api.readAlrim(id);
  };

  /* 선택한 알림 읽기 */
  const [read, setRead] = useState(false);
  const handleOnUpdate = async () => {
    const response = await api.readAlrim(alrim.notificationId);
    setRead(true);
  };

  return (
    <AlrimWrap key={alrim.notificationId} checked={alrim.checked} read={read}>
      <CheckedArea
        to={`/detail/${alrim.id}`}
        onClick={() => handleOnUpdate(alrim.notificationId)}
      >
        <Thumbnail>
          <Thumb src={alrim.imgUrl === '' ? Image : alrim.imgUrl}></Thumb>
        </Thumbnail>
        <Info>
          <TopArea>
            <AlrimInfo>
              <Type>{/* {alrim.type} */} 좋아요</Type>
              <AlrimContent>
                <b>{alrim.nickname}</b> 님이 리뷰에 좋아요를 눌렀습니다.
              </AlrimContent>
            </AlrimInfo>
          </TopArea>
          <BottomArea>
            {/* <AlrimFrom>{alrim.campName}</AlrimFrom> */}
            <Date>{alrim.createdDate}</Date>
          </BottomArea>
        </Info>
      </CheckedArea>
      <DeleteBtn onClick={(e) => handleOnDelete(alrim.id)}>
        <CloseOutlined />
      </DeleteBtn>
    </AlrimWrap>
  );
}