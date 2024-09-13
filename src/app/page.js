import GuestNavbar from '@/components/navbar/guestNavbar'
import BenefitsSection from '@/components/sections/benefitsSection'
import CharacteristicsSection from '@/components/sections/characteristicsSection'
import ContactSection from '@/components/sections/contactSection'
import FooterSection from '@/components/sections/footerSection'
import HomeSection from '@/components/sections/homeSection'
import { Divider } from '@nextui-org/react'
import {
  FaArrowRightFromBracket,
  FaKitMedical,
  FaBuffer,
  FaHeartCirclePlus,
  FaCheck,
  FaPhone,
  FaMailchimp,
  FaHospitalUser
} from 'react-icons/fa6'

export default function Home () {
  const homeButtonIcon = <FaArrowRightFromBracket />

  const characteristicsSectionIcon = (
    <FaBuffer size={50} className='text-success' />
  )

  const characteristicsChipIcon = (
    <FaKitMedical size={20} className='text-success' />
  )

  const benefitsSectionIcon = (
    <FaHeartCirclePlus size={50} className='text-success' />
  )
  const benefitsChipIcon = <FaCheck size={20} className='text-success' />

  const contactSectionIcon = <FaMailchimp size={50} className='text-success' />
  const contactPhoneIcon = <FaPhone size={20} className='text-success' />
  const contactMailIcon = <FaHospitalUser size={20} className='text-success' />
  return (
    <main className='dark text-foreground bg-background flex flex-col items-center justify-center overflow-x-hidden'>
      <GuestNavbar />
      <HomeSection btnIcon={homeButtonIcon} />
      <CharacteristicsSection
        sectionIcon={characteristicsSectionIcon}
        chipIcon={characteristicsChipIcon}
      />
      <BenefitsSection icon={benefitsSectionIcon} chipIcon={benefitsChipIcon} />
      <ContactSection
        sectionIcon={contactSectionIcon}
        phoneIcon={contactPhoneIcon}
        mailIcon={contactMailIcon}
      />
      <Divider className=' mt-10' />
      <FooterSection />
    </main>
  )
}
