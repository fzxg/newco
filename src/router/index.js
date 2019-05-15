import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import VillageOpen from '../components/User/VillageOpen'
import AffairsOpen from '../components/User/AffairsOpen'
import AccountsOpen from '../components/User/AccountsOpen'
import PartyMemberOpen from '../components/User/PartyMemberOpen'
import PartyMassesOpen from '../components/User/PartyMassesOpen'
import RegulationsOpen from '../components/User/RegulationsOpen'
import WCWorkOpen from '../components/User/WCWorkOpen'
import LifeGuideOpen from '../components/User/LifeGuideOpen'
import LeagueBranchOpen from '../components/User/LeagueBranchOpen'
import DietOpen from '../components/User/DietOpen'
import HealthyOpen from '../components/User/HealthyOpen'
import AgriculturalOpen from '../components/User/AgriculturalOpen'
import Info from '../components/Info'
import Manage from '../components/Manage'
import TemporaryPopulation from '../components/Admin/TemporaryPopulations'
import Agricultural from '../components/Admin/Agricultural'
import Healthy from '../components/Admin/Healthy'
import Diet from '../components/Admin/Diet'
import Regulations from '../components/Admin/Regulations'
import LifeGuide from '../components/Admin/LifeGuide'
import OtherGuarantee from '../components/Admin/OtherGuarantee'
import PovertyGuarantee from '../components/Admin/PovertyGuarantee'
import MinGuarantee from '../components/Admin/MinGuarantee'
import MedicalService from '../components/Admin/MedicalService'
import Insurance from '../components/Admin/Insurance'
import Village from '../components/Admin/Village'
import Affairs from '../components/Admin/Affairs'
import Accounts from '../components/Admin/Accounts'
import Documents from '../components/Admin/Documents'
import Finance from '../components/Admin/Finance'
import Statistics from '../components/Admin/Statistics'
import PermanentPopulation from '../components/Admin/PermanentPopulation'
import BirthReg from '../components/Admin/BirthReg'
import DeathReg from '../components/Admin/DeathReg'
import PartyMember from '../components/Admin/PartyMember'
import PartyMasses from '../components/Admin/PartyMasses'
import LeagueBranch from '../components/Admin/LeagueBranch'
import WCWork from '../components/Admin/WCWork'
import ResidentialLand from '../components/Admin/ResidentialLand'
import AgriculturalLand from '../components/Admin/AgriculturalLand'
import OtherLand from '../components/Admin/OtherLand'
import VillageEnterprises from '../components/Admin/VillageEnterprises'
import FarmerCooperation from '../components/Admin/FarmerCooperation'
import ContractManage from '../components/Admin/ContractManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'VillageOpen',
      component: VillageOpen
    },
    {
      path: '/affairop',
      name: 'AffairsOpen',
      component: AffairsOpen
    },
    {
      path: '/accountsop',
      name: 'AccountsOpen',
      component: AccountsOpen
    },
    {
      path: '/partymemberop',
      name: 'PartyMemberOpen',
      component: PartyMemberOpen
    },
    {
      path: '/partymassesop',
      name: 'PartyMassesOpen',
      component: PartyMassesOpen
    },
    {
      path: '/leaguebranchop',
      name: 'LeagueBranchOpen',
      component: LeagueBranchOpen
    },
    {
      path: '/wcworkop',
      name: 'WCWorkOpen',
      component: WCWorkOpen
    },
    {
      path: 'lifeguideop',
      name: 'LifeGuideOpen',
      component: LifeGuideOpen
    },
    {
      path: '/rgulationsop',
      name: 'RegulationsOpen',
      component: RegulationsOpen
    },
    {
      path: '/dietop',
      name: 'DietOpen',
      component: DietOpen
    },
    {
      path: '/healthyop',
      name: 'HealthyOpen',
      component: HealthyOpen
    },
    {
      path: '/agriculturalop',
      name: 'AgriculturalOpen',
      component: AgriculturalOpen
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/village',
      name: 'Village',
      component: Village
    },
    {
      path: '/affairs',
      name: 'Affairs',
      component: Affairs
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/finance',
      name: 'Finance',
      component: Finance
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/permanentpopulation',
      name: 'PermanentPopulation',
      component: PermanentPopulation
    },
    {
      path: '/temporarypopulations',
      name: 'TemporaryPopulations',
      component: TemporaryPopulation
    },
    {
      path: '/birthreg',
      name: 'BirthReg',
      component: BirthReg
    },
    {
      path: '/deathreg',
      name: 'DeathReg',
      component: DeathReg
    },
    {
      path: '/partymember',
      name: 'PartyMember',
      component: PartyMember
    },
    {
      path: '/partymasses',
      name: 'PartyMasses',
      component: PartyMasses
    },
    {
      path: '/leaguebranch',
      name: 'LeagueBranch',
      component: LeagueBranch
    },
    {
      path: '/wcwork',
      name: 'WCWork',
      component: WCWork
    },
    {
      path: '/residentialland',
      name: 'ResidentialLand',
      component: ResidentialLand
    },
    {
      path: '/agriculturalland',
      name: 'AgriculturalLand',
      component: AgriculturalLand
    },
    {
      path: '/otherland',
      name: 'OtherLand',
      component: OtherLand
    },
    {
      path: '/villageenterprises',
      name: 'VillageEnterprises',
      component: VillageEnterprises
    },
    {
      path: '/farmercooperation',
      name: 'FarmerCooperation',
      component: FarmerCooperation
    },
    {
      path: '/contractmanage',
      name: 'ContractManage',
      component: ContractManage
    },
    {
      path: '/insurance',
      name: 'Insurance',
      component: Insurance
    },
    {
      path: '/medicalservice',
      name: 'MedicalService',
      component: MedicalService
    },
    {
      path: '/minguarantee',
      name: 'MinGuarantee',
      component: MinGuarantee
    },
    {
      path: '/povertyguarantee',
      name: 'PovertyGuarantee',
      component: PovertyGuarantee
    },
    {
      path: '/otherguarantee',
      name: 'OtherGuarantee',
      component: OtherGuarantee
    },
    {
      path: '/lifeguide',
      name: 'LifeGuide',
      component: LifeGuide
    },
    {
      path: '/regulations',
      name: 'Regulations',
      component: Regulations
    },
    {
      path: '/diet',
      name: 'Diet',
      component: Diet
    },
    {
      path: '/healthy',
      name: 'Healthy',
      component: Healthy
    },
    {
      path: '/agricultural',
      name: 'Agricultural',
      component: Agricultural
    }
  ]
})
