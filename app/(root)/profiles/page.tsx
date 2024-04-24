import { SelectProfile } from "@/components/pages/auth/profile/select-profile"
import { getProfiles } from "@/utils"

export default async function Profiles(){
    const profiles = await getProfiles()
    return (
        <SelectProfile profiles={profiles}/>
    )
}