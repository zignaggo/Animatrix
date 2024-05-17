import { getProfiles } from "@/components/pages/profiles/mutations"
import { SelectProfile } from "@/components/pages/profiles/select-profile"

export default async function ChooseProfile() {
    const profiles = await getProfiles()
    return <SelectProfile profiles={profiles} />
}

