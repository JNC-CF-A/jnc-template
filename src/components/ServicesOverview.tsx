import Link from 'next/link'
import { Salad, Dumbbell, Users } from 'lucide-react'

const services = [
  { 
    id: 1, 
    name: "Personalized Meal Planning", 
    description: "Customized meal plans tailored to your nutritional needs and goals.",
    icon: Salad
  },
  { 
    id: 2, 
    name: "One-on-One Coaching", 
    description: "Individual coaching sessions to guide you through your nutritional journey.",
    icon: Dumbbell
  },
  { 
    id: 3, 
    name: "Group Workshops", 
    description: "Interactive group sessions on various nutrition topics.",
    icon: Users
  },
]

export default function ServicesOverview() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className="bg-secondary p-6 rounded-lg shadow-md flex flex-col items-center">
            <service.icon 
              className={`w-12 h-12 mb-4 ${
                index === 0 ? 'text-accent-lime' : 
                index === 1 ? 'text-accent-raspberry' : 
                'text-accent-orange'
              }`} 
            />
            <h3 className="text-xl font-semibold mb-2 text-secondary-foreground text-center">{service.name}</h3>
            <p className="text-secondary-foreground mb-4 text-center">{service.description}</p>
            <Link 
              href={`/services#${service.id}`} 
              className={`text-accent-${index === 0 ? 'lime' : index === 1 ? 'raspberry' : 'orange'} hover:underline mt-auto`}
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
