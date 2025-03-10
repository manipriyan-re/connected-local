import { Kafka } from 'kafkajs';

const kafka = new Kafka({
	clientId: 'nextjs-app',
	brokers: ['kafka:9092'], // Use 'localhost' for Docker bridge network or 'kafka:9092' for internal Docker networks
});

const consumer = kafka.consumer({ groupId: `nextjs-group-${Date.now()}` });

// Store messages in memory
const kafkaMessages = [];

async function runConsumer() {
	await consumer.connect();
	await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			const msg = message.value?.toString();
			// Save messages in memory
			kafkaMessages.push({
				topic,
				partition,
				value: msg,
				timestamp: new Date().toISOString(),
			});
		},
	});
}

// Run consumer only once when server starts
if (!global.kafkaConsumerRunning) {
	runConsumer().catch(console.error);
	global.kafkaConsumerRunning = true;
}

// Handle API Request
export default function handler(req, res) {
	res.setHeader(
		'Cache-Control',
		'no-store, no-cache, must-revalidate, proxy-revalidate',
	);
	res.status(200).json({
		messages: kafkaMessages,
	});
}
