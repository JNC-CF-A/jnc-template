import { Layout } from '../../components'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'

export default function Contact() {
  return (
    <Layout>
      <BasicMeta url="/contact" title="Contact" />
      <OpenGraphMeta url="/contact" title="Contact" />
      <TwitterCardMeta url="/contact" title="Contact" />
      <div className="container">
        <h1>Contact Us</h1>
        <p>Please reach out via email or phone to book a consultation.</p>
      </div>
      <style jsx>{`
        .container {
          flex: 1 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 1rem;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
