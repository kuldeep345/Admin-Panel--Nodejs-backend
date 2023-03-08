import mongoose from 'mongoose'

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers:Number,
        yearlySalesTotal:Number,
        yearlySalesTotalUnits:Number,
        year:Number,
        monthlyData:[
            {
                month:String,
                totalSales:Number,
                totalUnits:Number
            }
        ],
        dailyData:[{
            date:String,
            totalSales:Number,
            totalUnits:Number
        }],
        salesByCategory:{
            type:Map,
            of:Number
        }
    },
    { timestamps:true }
)

export default mongoose.models.OverallStat || mongoose.model("OverallStat" , OverallStatSchema)