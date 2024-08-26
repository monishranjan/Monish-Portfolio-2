import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Welcome to Monish Website</h1>
    </motion.div>
  );
};

export default Home;