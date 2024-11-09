import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import {Card} from "../components/homepage/Features"

export default function Features() {
    return(
        <>
            

            {/* Page Container */}
            <div className="mt-12">

                {/* Heading Section Container */}
                <div className="max-w-4xl text-center mx-auto px-6 py-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">What gym<span className="text-brand">skii</span> offers:</h1>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed">From visuals to your diet, gymskii offers a central dashboard called the "Gains Lab"</p>
                </div>

            
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <Card icon = {<TrendingUpIcon style={{ fontSize: 60 }} />} title = "Visual Progress Tracking" p = "Log every workout and see your progress unfold with detailed graphs and visuals." />
                        <Card icon = {<AccessAlarmIcon style={{ fontSize: 60 }} />} title = "Supplement Reminders" p = "Track every supplement and set timely reminders to stay on top of your routine." />
                        <Card icon = {<RestaurantIcon style={{ fontSize: 60 }} />} title = "Diet Tracking" p = "Track your important macros to ensure you're properly fueled" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <Card icon = {<DashboardIcon style={{ fontSize: 60 }} />} title = "Workout Dashboard" p = "View every aspect of your routine, all in one central hub" />
                        <Card icon = {<SchoolIcon style={{ fontSize: 60 }} />} title = "Learn Effectively" p = "Take advantage of our free resources to improve how you workout" />
                        <Card icon = {<GroupIcon style={{ fontSize: 60 }} />} title = "Community" p = "Join a community of driven individuals all striving for daily improvement." />
                    </div>
                

            </div>
            
           
        </>
        
    )
}