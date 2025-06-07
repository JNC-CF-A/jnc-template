import Link from 'next/link'
import { Salad, Dumbbell, Users } from 'lucide-react'

const services = [
  {
    id: 1,
    name: 'Personalized Meal Planning',
    description: 'Customized meal plans tailored to your nutritional needs and goals.',
    icon: Salad,
  },
  {
    id: 2,
    name: 'One-on-One Coaching',
    description: 'Individual coaching sessions to guide you through your nutritional journey.',
    icon: Dumbbell,
  },
  {
    id: 3,
    name: 'Group Workshops',
    description: 'Interactive group sessions on various nutrition topics.',
    icon: Users,
  },
]

export default function WorkWithMeSection() {
  return (
    <section className="work-with-me">
      <h2>Work With Me</h2>
      <div className="grid">
        {services.map((service) => (
          <div className="box" key={service.id}>
            <service.icon className="icon" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <Link href={`/contact?service=${encodeURIComponent(service.name)}`} className="cta">
              Get Started
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .work-with-me {
          padding: 3rem 1rem;
          text-align: center;
        }
        .grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          margin-top: 2rem;
        }
        .box {
          background: #fff;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon {
          width: 3rem;
          height: 3rem;
          margin-bottom: 1rem;
          color: var(--accent-terra);
        }
        .box h3 {
          margin: 0 0 0.5rem;
        }
        .box p {
          flex-grow: 1;
          margin-bottom: 1rem;
        }
        .cta {
          background: var(--accent-orange);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          text-decoration: none;
          transition: background-color 150ms;
        }
        .cta:hover {
          background: var(--accent-olive);
        }
      `}</style>
    </section>
  )
}
