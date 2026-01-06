---
title: "Kubernetes Architecture Explained"
date: "2026-01-06"
image: "/images/posts/k8s.png"
---

Kubernetes is a powerful open-source platform designed for automating the deployment, scaling, and operation of application containers across clusters of hosts. It follows a client-server architecture and consists of several components that work together to manage containerized applications.

---

Control Plane Components

The Control Plane is responsible for maintaining the desired state of the cluster and managing the worker nodes. It consists of the following components:

kube-apiserver: The API server is the central hub of the Kubernetes cluster, exposing the Kubernetes API. It handles all API requests, manages authentication and authorization, and processes API requests for Kubernetes objects like pods and services.

etcd: A distributed key-value store that acts as the brain of the Kubernetes cluster. It stores all configurations, states, and metadata of Kubernetes objects. It ensures strong consistency and availability using the Raft consensus algorithm.

kube-scheduler: Responsible for scheduling pods on worker nodes based on resource requirements, affinity, taints, and other constraints. It uses filtering and scoring operations to select the best node for a pod.

kube-controller-manager: Runs various controllers that ensure the desired state of the cluster. Controllers include the deployment controller, replicaset controller, and node controller, among others.

cloud-controller-manager: Integrates Kubernetes with cloud provider APIs, managing cloud-specific resources like instances, load balancers, and storage volumes. It contains controllers for node, route, and service management.

Worker Node Components

Worker nodes are responsible for running containerized applications. Each worker node includes the following components:

kubelet: An agent that runs on each node, ensuring that containers are running in a pod. It interacts with the container runtime to manage the lifecycle of containers and reports node and pod status to the API server.

kube-proxy: A network proxy that runs on each node, implementing the Kubernetes Service concept. It creates network rules to route traffic to the appropriate pods, supporting load balancing and service discovery.

Container Runtime: The software component required to run containers. Kubernetes supports multiple container runtimes like containerd, CRI-O, and Docker, which are compliant with the Container Runtime Interface (CRI).

Addon Components

Kubernetes clusters often require additional components to be fully operational. Some popular addons include:

CNI Plugin: Provides networking capabilities for pods, enabling communication between pods across nodes. Examples include Calico, Flannel, and Weave Net.

CoreDNS: Acts as a DNS server within the Kubernetes cluster, enabling DNS-based service discovery.

Metrics Server: Collects performance data and resource usage of nodes and pods in the cluster.

Kubernetes Dashboard: A web-based UI for managing and troubleshooting applications running in the cluster.

Understanding Kubernetes architecture is crucial for effectively managing and troubleshooting applications in a Kubernetes cluster. By comprehending the roles and interactions of various components, you can ensure a robust and efficient Kubernetes environment.