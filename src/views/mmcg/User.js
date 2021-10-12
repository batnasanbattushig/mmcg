import {
  React, useState
} from 'react'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow
} from '@coreui/react'
import usersData from '../users/UsersData'
import ProfileImage from '../../common/profile_image/ProfileImage'


const User = ({match}) => {
  const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]


    const [image, setImage] = useState(
      'http://example.com/initialimage.jpg'
    )
  
    const handleDrop = (dropped) => {
      setImage(dropped[0])
    }



  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Ажилтны нэр
          </CCardHeader>
          <CCardBody>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Овог</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Овог" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Нэр</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Нэр" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Регистрийн дугаар</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Регистрийн дугаар" />
              </CCol>
            </CFormGroup>



            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Зураг</CLabel>
              </CCol>
              <CCol xs="12" md="9">




      <ProfileImage/>





              </CCol>
            </CFormGroup>





          </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
